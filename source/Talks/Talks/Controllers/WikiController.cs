using Elasticsearch.Net;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Talks.Controllers
{
    [Route("api/wiki")]
    public class WikiController : ApiController
    {
        public IEnumerable<Page> GetAll()
        {

        var settings = new ConnectionSettings(new Uri("http://vmtalks.cloudapp.net")).DefaultIndex("enwikinews");
            var client = new ElasticClient(settings);

            var searchResponse = client.Search<Page>(s => s
                .From(0)
                .Size(10)
                .Query(q => q
                        .Match(m => m
                        .Field(f => f.title)
                        .Query("brazil")
                        )
                )
            );

            return searchResponse.Documents;
        }

        [HttpGet]
        [Route("api/wiki/{id}")]
        public Page Search(string id = "")
        {
            var settings = new ConnectionSettings(new Uri("http://vmtalks.cloudapp.net")).DefaultIndex("enwikinews");
            var client = new ElasticClient(settings);

            var searchResponse = client.Get<Page>(id);

            return searchResponse.Source;
        }

        [HttpGet]
        [Route("api/wiki/terms/{id}")]
        public TermVectorResponse GetTerms(string id = "")
        {
            var settings = new ConnectionSettings(new Uri("http://vmtalks.cloudapp.net")).DefaultIndex("wikinews");
            settings.DisableDirectStreaming();

            var client = new ElasticClient(settings);

            var result = client.TermVectors<Page>(x => x.Id(id).Fields(fi => fi.title).Offsets(true).Payloads(true).Positions(true).TermStatistics(true).FieldStatistics(true));
            var searchResponse = client.Get<Page>(id);

            var response = new TermVectorResponse() {data = result.TermVectors["title"],  title = searchResponse.Source.title};
            return response;
        }

        [HttpGet]
        [Route("api/wiki/{query}/{from}/{take}")]
        public ResponseData<Page> Search(string query = "", int from = 0, int take = 15)
        {
            var settings = new ConnectionSettings(new Uri("http://vmtalks.cloudapp.net")).DefaultIndex("wikinews");
            settings.DisableDirectStreaming();

            var client = new ElasticClient(settings);

            var searchResponse = client.Search<Page>(s => s
                .From(from)
                .Size(take)
                .Query(q => q
                        .MultiMatch(mu => mu.Fields(f => f.Field(t => t.title).Field(t => t.text)).Query(query))
                ).Highlight(h => h
                .PreTags("<em class='tag'>")
                .PostTags("</em>")
                .Fields(fs => fs.Field(p => p.title)
                            .PreTags("<em class='titleTag'>")
                            .PostTags("</em>"),
                        fs => fs.Field(p => p.text)
                            .PreTags("<em class='textTag'>")
                            .PostTags("</em>"))
                            .NumberOfFragments(0)
                )
            );

            var result = searchResponse.Hits.Select(x => {
                x.Source.id = x.Id;
                var titleHighs = x.Highlights.Where(p => p.Key.Equals("title"));
                var textHighs = x.Highlights.Where(p => p.Key.Equals("text"));

                x.Source.title_highlighted = titleHighs.Count() > 0 ? titleHighs.ElementAt(0).Value.Highlights.ElementAt(0).ToString() : x.Source.title;
                x.Source.text = textHighs.Count() > 0 ? textHighs.ElementAt(0).Value.Highlights.ElementAt(0).ToString() : x.Source.text;
                return x.Source; }).ToList();

            //client.Search<Page>(s => s.Suggest(ss => ss.Phrase("suggest", m => m.Analyzer("reverse").(SuggestMode.Always).Text(query).Size(2).Field(fi => fi.title))));
            var suggestionsQuery = client.Search<Page>(s => s.Suggest(ss => ss
                .Phrase("simple_phrase", ph => ph
                    .Text(query)
                    .Field(fi => fi.title)
                    .Size(2)
                    .DirectGenerator(di => di
                        .Field(fi => fi.title)
                        .SuggestMode(SuggestMode.Always), di => di
                        .Field(fi => fi.title)
                        .SuggestMode(SuggestMode.Always)
                        .PreFilter("reverse")
                        .PostFilter("reverse")))));

            List<string> suggestions = suggestionsQuery.Suggest.Count > 0 ? suggestionsQuery.Suggest.ElementAt(0).Value.ElementAt(0).Options.Select(x => { return x.Text; }).ToList() : new List<string>();

            ResponseData<Page> response = new ResponseData<Page>();
            response.Data = result;
            response.Total = searchResponse.Total;
            response.Suggestions = suggestions;

            return response;
        }

        [ElasticsearchType(IdProperty = nameof(id))]
        public class Page
        {
            public string id { get; set; }
            public string title { get; set; }
            public string timestamp { get; set; }
            public string text { get; set; }
            public string title_highlighted { get; set; }
            public string text_bytes { get; set; }
            public List<string> category { get; set; }
            public List<string> template { get; set; }
            public List<string> heading { get; set; }
            public List<string> outgoing_link { get; set; }
            public Int64 incoming_links { get; set; }
            public List<Redirect> redirect { get; set; }
            public List<string> auxiliary_text { get; set; }
            public List<string> external_link { get; set; }
            public string namespace_text { get; set; }
            public string opening_text { get; set; }
            public string source_text { get; set; }
            public string language { get; set; }
            public string wikibase_item { get; set; }
            public string version_type { get; set; }
            public Int64 version { get; set; }
            public string defaultsort { get; set; }
            public string wiki { get; set; }
            public string content_model { get; set; }
        }

        public class TermVectorResponse
        {
            public string title { get; set; }
            public TermVector data { get; set; }
        }

        public class Redirect
        {
            public string title { get; set; }
        }

        public class ResponseData<T>
        {
            public List<T> Data { get; set; }
            public Int64 Total { get; set; }
            public List<string> Suggestions { get; set; }
        }
    }
}




