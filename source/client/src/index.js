import storeFactory from "./store";
import { AddPageSize, AddNews, EditNews, AddNewsBulk, RemoveNews, AddDidyoumean, ClearDidyoumean, Search, ClearSearch, AddSuggestionsBulk, ClearSuggestion, CancelEdit, SetNextToken, SetPreviusToken, SetActualPage, AddError, ClearError } from "./actions";

const store = storeFactory();

let news1 = {
		   "title":"Australia celebrates Australia Day 2009",
		   "timestamp":"2014-06-28T12:09:39Z",
		   "text":"Wednesday, January 28, 2009\u00a0  Australia Related articles  25 January 2017: Nadal beats Raonic to reach Australian Open semis 23 January 2017: Federer beats Nishikori in Australian Open's fourth round 23 January 2017: Murray loses to rank 50 Zverev in Australian Open's fourth round 17 December 2016: Australian Federal Court orders ISPs to block copyright infringing sites 24 November 2016: Gympie win Twenty20 cricket final on Australia's Sunshine Coast  Location of Australia    Collaborate!  Pillars of Wikinews writing Writing an article    All around Australia, ordinary people have celebrated Australia Day. Australia Day, on January 26 each year, is commemorated as Invasion Day by many indigenous Australians. In 2009, it coincided with Lunar New Year, celebrated by many Asian cultures.       Thousands of people have celebrated Australia Day with barbecues, concerts and boat races. Police expected half a million people to flock to the Hyde Park and the Harbour. Sources Australian Associated Press. \"Winning back the flag for a day\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Australian Associated Press. \"A nation swings into party mode\" \u2014\u00a0The Age, January 27, 2009  Melbourne's Australia Day Parade was a multicultural event with many ethnic groups marching. Notably absent was the city's Vietnamese community, who chose to celebrate the Lunar New Year independently. Sources Australian Associated Press. \"Melbourne hosts Australia Day parade\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Nikki Protyniak. \"Plenty of pride at Melbourne's Australia Day parade\" \u2014\u00a0Herald Sun, January 27, 2009       From 4:30 pm local time, police in Queensland's Sunshine Coast received calls from residents about loud drunken parties. Police arrested at least five people in a Noosaville park with another unit needing backup at Gympie Terrace (Noosa). But, it was not all bad news for Sunshine Coast residents as thousands showed up to watch the \"dunny races\" at Aussie World. The crowd cheered as the final got under way. Maroochy Roos Australian Football team won. A dunny race is contested by four people pushing an outhouse, an outdoors toilet, on wheels. Sources \"Five arrests mar Australia Day\" \u2014\u00a0Sunshine Coast Daily, January 27, 2009 Rebecca Brownlie 2009, January 27 \"It's a dunny deal\", Sunshine Coast Daily p9       South Africa defeated Australia in their Limited Overs International in Adelaide, wrapping up the series of five cricket matches in the process. Batting first, Australia were all out for 222 runs off 48 overs. South Africa easily made the 223 target with more than 11 overs left. \"Once again, as has happened in the first three games, we lost wickets in a clump in the middle of the innings,\" Australian captain Ricky Ponting said. The match's highest scoring batsman was AB de Villiers with 82 runs not out.     Wikipedia has more about this subject: South African cricket team in Australia in 2008\u201309   Sources Andrew Faulkner. \"One day that's better forgotten for our cricketers\" \u2014\u00a0The Australian, January 27, 2009 \"Australian cricket team loses to South Africa\" \u2014\u00a0Australian Broadcasting Corporation, January 27, 2009 \"South Africa win ODI series as well\" \u2014\u00a0indianexpress.com, January 27, 2009",
		   "text_bytes":4948,
		   "category":[
		      "January 28, 2009",
		      "Published",
		      "Cricket",
		      "Australia",
		      "Oceania",
		      "Sports",
		      "Culture and entertainment",
		      "Queensland",
		      "Sydney Harbour",
		      "Sunshine Coast",
		      "Australia Day",
		      "RockerballAustralia (Wikinewsie)",
		      "Archived"
		   ],
		   "heading":[
		      "Thousands party in Sydney",
		      "Flags of all nations symbolise unity at Melbourne parade",
		      "Thousands turn out for \"dunny race\" as arrests mar Sunshine Coast Australia Day",
		      "South Africa win Limited Overs International, Series"
		   ],
		   "outgoing_link":[
		      "Template:Infobox\/lookup\/Australia",
		      "Template:Editprotected",
		      "Sydney_Morning_Herald",
		      "The_Age",
		      "Herald_Sun",
		      "Sunshine_Coast_Daily",
		      "The_Australian",
		      "Australian_Broadcasting_Corporation",
		      "Indianexpress.com",
		      "Australia",
		      "Cricket",
		      "Category:Australia",
		      "Talk:Australia_celebrates_Australia_Day_2009",
		      "Wikinews:ARCHIVE",
		      "Wikinews:Admin_action_alerts",
		      "Wikinews:Administrators",
		      "Wikinews:Archive_conventions",
		      "Wikinews:PILLARS",
		      "Wikinews:WRITE"
		   ],
		   "incoming_links":3,
		   "version":2714829,
		   "popularity_score":3.3698997011431e-5
		};
let news2 = {
		   "title":"Australia celebrates Australia",
		   "timestamp":"2014-06-28T12:09:39Z",
		   "text":"Wednesday, January 28, 2009\u00a0  Australia Related articles  25 January 2017: Nadal beats Raonic to reach Australian Open semis 23 January 2017: Federer beats Nishikori in Australian Open's fourth round 23 January 2017: Murray loses to rank 50 Zverev in Australian Open's fourth round 17 December 2016: Australian Federal Court orders ISPs to block copyright infringing sites 24 November 2016: Gympie win Twenty20 cricket final on Australia's Sunshine Coast  Location of Australia    Collaborate!  Pillars of Wikinews writing Writing an article    All around Australia, ordinary people have celebrated Australia Day. Australia Day, on January 26 each year, is commemorated as Invasion Day by many indigenous Australians. In 2009, it coincided with Lunar New Year, celebrated by many Asian cultures.       Thousands of people have celebrated Australia Day with barbecues, concerts and boat races. Police expected half a million people to flock to the Hyde Park and the Harbour. Sources Australian Associated Press. \"Winning back the flag for a day\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Australian Associated Press. \"A nation swings into party mode\" \u2014\u00a0The Age, January 27, 2009  Melbourne's Australia Day Parade was a multicultural event with many ethnic groups marching. Notably absent was the city's Vietnamese community, who chose to celebrate the Lunar New Year independently. Sources Australian Associated Press. \"Melbourne hosts Australia Day parade\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Nikki Protyniak. \"Plenty of pride at Melbourne's Australia Day parade\" \u2014\u00a0Herald Sun, January 27, 2009       From 4:30 pm local time, police in Queensland's Sunshine Coast received calls from residents about loud drunken parties. Police arrested at least five people in a Noosaville park with another unit needing backup at Gympie Terrace (Noosa). But, it was not all bad news for Sunshine Coast residents as thousands showed up to watch the \"dunny races\" at Aussie World. The crowd cheered as the final got under way. Maroochy Roos Australian Football team won. A dunny race is contested by four people pushing an outhouse, an outdoors toilet, on wheels. Sources \"Five arrests mar Australia Day\" \u2014\u00a0Sunshine Coast Daily, January 27, 2009 Rebecca Brownlie 2009, January 27 \"It's a dunny deal\", Sunshine Coast Daily p9       South Africa defeated Australia in their Limited Overs International in Adelaide, wrapping up the series of five cricket matches in the process. Batting first, Australia were all out for 222 runs off 48 overs. South Africa easily made the 223 target with more than 11 overs left. \"Once again, as has happened in the first three games, we lost wickets in a clump in the middle of the innings,\" Australian captain Ricky Ponting said. The match's highest scoring batsman was AB de Villiers with 82 runs not out.     Wikipedia has more about this subject: South African cricket team in Australia in 2008\u201309   Sources Andrew Faulkner. \"One day that's better forgotten for our cricketers\" \u2014\u00a0The Australian, January 27, 2009 \"Australian cricket team loses to South Africa\" \u2014\u00a0Australian Broadcasting Corporation, January 27, 2009 \"South Africa win ODI series as well\" \u2014\u00a0indianexpress.com, January 27, 2009",
		   "text_bytes":4948,
		   "category":[
		      "January 28, 2009",
		      "Published",
		      "Cricket",
		      "Australia",
		      "Oceania",
		      "Sports",
		      "Culture and entertainment",
		      "Queensland",
		      "Sydney Harbour",
		      "Sunshine Coast",
		      "Australia Day",
		      "RockerballAustralia (Wikinewsie)",
		      "Archived"
		   ],
		   "heading":[
		      "Thousands party in Sydney",
		      "Flags of all nations symbolise unity at Melbourne parade",
		      "Thousands turn out for \"dunny race\" as arrests mar Sunshine Coast Australia Day",
		      "South Africa win Limited Overs International, Series"
		   ],
		   "outgoing_link":[
		      "Template:Infobox\/lookup\/Australia",
		      "Template:Editprotected",
		      "Sydney_Morning_Herald",
		      "The_Age",
		      "Herald_Sun",
		      "Sunshine_Coast_Daily",
		      "The_Australian",
		      "Australian_Broadcasting_Corporation",
		      "Indianexpress.com",
		      "Australia",
		      "Cricket",
		      "Category:Australia",
		      "Talk:Australia_celebrates_Australia_Day_2009",
		      "Wikinews:ARCHIVE",
		      "Wikinews:Admin_action_alerts",
		      "Wikinews:Administrators",
		      "Wikinews:Archive_conventions",
		      "Wikinews:PILLARS",
		      "Wikinews:WRITE"
		   ],
		   "incoming_links":3,
		   "version":2714829,
		   "popularity_score":3.3698997011431e-5
		};

let news3 = {
		   "title":"Australia celebrates Australia 3",
		   "timestamp":"2014-06-28T12:09:39Z",
		   "text":"Wednesday, January 28, 2009\u00a0  Australia Related articles  25 January 2017: Nadal beats Raonic to reach Australian Open semis 23 January 2017: Federer beats Nishikori in Australian Open's fourth round 23 January 2017: Murray loses to rank 50 Zverev in Australian Open's fourth round 17 December 2016: Australian Federal Court orders ISPs to block copyright infringing sites 24 November 2016: Gympie win Twenty20 cricket final on Australia's Sunshine Coast  Location of Australia    Collaborate!  Pillars of Wikinews writing Writing an article    All around Australia, ordinary people have celebrated Australia Day. Australia Day, on January 26 each year, is commemorated as Invasion Day by many indigenous Australians. In 2009, it coincided with Lunar New Year, celebrated by many Asian cultures.       Thousands of people have celebrated Australia Day with barbecues, concerts and boat races. Police expected half a million people to flock to the Hyde Park and the Harbour. Sources Australian Associated Press. \"Winning back the flag for a day\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Australian Associated Press. \"A nation swings into party mode\" \u2014\u00a0The Age, January 27, 2009  Melbourne's Australia Day Parade was a multicultural event with many ethnic groups marching. Notably absent was the city's Vietnamese community, who chose to celebrate the Lunar New Year independently. Sources Australian Associated Press. \"Melbourne hosts Australia Day parade\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Nikki Protyniak. \"Plenty of pride at Melbourne's Australia Day parade\" \u2014\u00a0Herald Sun, January 27, 2009       From 4:30 pm local time, police in Queensland's Sunshine Coast received calls from residents about loud drunken parties. Police arrested at least five people in a Noosaville park with another unit needing backup at Gympie Terrace (Noosa). But, it was not all bad news for Sunshine Coast residents as thousands showed up to watch the \"dunny races\" at Aussie World. The crowd cheered as the final got under way. Maroochy Roos Australian Football team won. A dunny race is contested by four people pushing an outhouse, an outdoors toilet, on wheels. Sources \"Five arrests mar Australia Day\" \u2014\u00a0Sunshine Coast Daily, January 27, 2009 Rebecca Brownlie 2009, January 27 \"It's a dunny deal\", Sunshine Coast Daily p9       South Africa defeated Australia in their Limited Overs International in Adelaide, wrapping up the series of five cricket matches in the process. Batting first, Australia were all out for 222 runs off 48 overs. South Africa easily made the 223 target with more than 11 overs left. \"Once again, as has happened in the first three games, we lost wickets in a clump in the middle of the innings,\" Australian captain Ricky Ponting said. The match's highest scoring batsman was AB de Villiers with 82 runs not out.     Wikipedia has more about this subject: South African cricket team in Australia in 2008\u201309   Sources Andrew Faulkner. \"One day that's better forgotten for our cricketers\" \u2014\u00a0The Australian, January 27, 2009 \"Australian cricket team loses to South Africa\" \u2014\u00a0Australian Broadcasting Corporation, January 27, 2009 \"South Africa win ODI series as well\" \u2014\u00a0indianexpress.com, January 27, 2009",
		   "text_bytes":4948,
		   "category":[
		      "January 28, 2009",
		      "Published",
		      "Cricket",
		      "Australia",
		      "Oceania",
		      "Sports",
		      "Culture and entertainment",
		      "Queensland",
		      "Sydney Harbour",
		      "Sunshine Coast",
		      "Australia Day",
		      "RockerballAustralia (Wikinewsie)",
		      "Archived"
		   ],
		   "heading":[
		      "Thousands party in Sydney",
		      "Flags of all nations symbolise unity at Melbourne parade",
		      "Thousands turn out for \"dunny race\" as arrests mar Sunshine Coast Australia Day",
		      "South Africa win Limited Overs International, Series"
		   ],
		   "outgoing_link":[
		      "Template:Infobox\/lookup\/Australia",
		      "Template:Editprotected",
		      "Sydney_Morning_Herald",
		      "The_Age",
		      "Herald_Sun",
		      "Sunshine_Coast_Daily",
		      "The_Australian",
		      "Australian_Broadcasting_Corporation",
		      "Indianexpress.com",
		      "Australia",
		      "Cricket",
		      "Category:Australia",
		      "Talk:Australia_celebrates_Australia_Day_2009",
		      "Wikinews:ARCHIVE",
		      "Wikinews:Admin_action_alerts",
		      "Wikinews:Administrators",
		      "Wikinews:Archive_conventions",
		      "Wikinews:PILLARS",
		      "Wikinews:WRITE"
		   ],
		   "incoming_links":3,
		   "version":2714829,
		   "popularity_score":3.3698997011431e-5
		};

let news4 = {
		   "title":"Australia celebrates Australia 4",
		   "timestamp":"2014-06-28T12:09:39Z",
		   "text":"Wednesday, January 28, 2009\u00a0  Australia Related articles  25 January 2017: Nadal beats Raonic to reach Australian Open semis 23 January 2017: Federer beats Nishikori in Australian Open's fourth round 23 January 2017: Murray loses to rank 50 Zverev in Australian Open's fourth round 17 December 2016: Australian Federal Court orders ISPs to block copyright infringing sites 24 November 2016: Gympie win Twenty20 cricket final on Australia's Sunshine Coast  Location of Australia    Collaborate!  Pillars of Wikinews writing Writing an article    All around Australia, ordinary people have celebrated Australia Day. Australia Day, on January 26 each year, is commemorated as Invasion Day by many indigenous Australians. In 2009, it coincided with Lunar New Year, celebrated by many Asian cultures.       Thousands of people have celebrated Australia Day with barbecues, concerts and boat races. Police expected half a million people to flock to the Hyde Park and the Harbour. Sources Australian Associated Press. \"Winning back the flag for a day\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Australian Associated Press. \"A nation swings into party mode\" \u2014\u00a0The Age, January 27, 2009  Melbourne's Australia Day Parade was a multicultural event with many ethnic groups marching. Notably absent was the city's Vietnamese community, who chose to celebrate the Lunar New Year independently. Sources Australian Associated Press. \"Melbourne hosts Australia Day parade\" \u2014\u00a0Sydney Morning Herald, January 26, 2009 Nikki Protyniak. \"Plenty of pride at Melbourne's Australia Day parade\" \u2014\u00a0Herald Sun, January 27, 2009       From 4:30 pm local time, police in Queensland's Sunshine Coast received calls from residents about loud drunken parties. Police arrested at least five people in a Noosaville park with another unit needing backup at Gympie Terrace (Noosa). But, it was not all bad news for Sunshine Coast residents as thousands showed up to watch the \"dunny races\" at Aussie World. The crowd cheered as the final got under way. Maroochy Roos Australian Football team won. A dunny race is contested by four people pushing an outhouse, an outdoors toilet, on wheels. Sources \"Five arrests mar Australia Day\" \u2014\u00a0Sunshine Coast Daily, January 27, 2009 Rebecca Brownlie 2009, January 27 \"It's a dunny deal\", Sunshine Coast Daily p9       South Africa defeated Australia in their Limited Overs International in Adelaide, wrapping up the series of five cricket matches in the process. Batting first, Australia were all out for 222 runs off 48 overs. South Africa easily made the 223 target with more than 11 overs left. \"Once again, as has happened in the first three games, we lost wickets in a clump in the middle of the innings,\" Australian captain Ricky Ponting said. The match's highest scoring batsman was AB de Villiers with 82 runs not out.     Wikipedia has more about this subject: South African cricket team in Australia in 2008\u201309   Sources Andrew Faulkner. \"One day that's better forgotten for our cricketers\" \u2014\u00a0The Australian, January 27, 2009 \"Australian cricket team loses to South Africa\" \u2014\u00a0Australian Broadcasting Corporation, January 27, 2009 \"South Africa win ODI series as well\" \u2014\u00a0indianexpress.com, January 27, 2009",
		   "text_bytes":4948,
		   "category":[
		      "January 28, 2009",
		      "Published",
		      "Cricket",
		      "Australia",
		      "Oceania",
		      "Sports",
		      "Culture and entertainment",
		      "Queensland",
		      "Sydney Harbour",
		      "Sunshine Coast",
		      "Australia Day",
		      "RockerballAustralia (Wikinewsie)",
		      "Archived"
		   ],
		   "heading":[
		      "Thousands party in Sydney",
		      "Flags of all nations symbolise unity at Melbourne parade",
		      "Thousands turn out for \"dunny race\" as arrests mar Sunshine Coast Australia Day",
		      "South Africa win Limited Overs International, Series"
		   ],
		   "outgoing_link":[
		      "Template:Infobox\/lookup\/Australia",
		      "Template:Editprotected",
		      "Sydney_Morning_Herald",
		      "The_Age",
		      "Herald_Sun",
		      "Sunshine_Coast_Daily",
		      "The_Australian",
		      "Australian_Broadcasting_Corporation",
		      "Indianexpress.com",
		      "Australia",
		      "Cricket",
		      "Category:Australia",
		      "Talk:Australia_celebrates_Australia_Day_2009",
		      "Wikinews:ARCHIVE",
		      "Wikinews:Admin_action_alerts",
		      "Wikinews:Administrators",
		      "Wikinews:Archive_conventions",
		      "Wikinews:PILLARS",
		      "Wikinews:WRITE"
		   ],
		   "incoming_links":3,
		   "version":2714829,
		   "popularity_score":3.3698997011431e-5
		};


 store.dispatch(AddPageSize(5));
 store.dispatch(AddNews(news1));
 store.dispatch(AddNewsBulk([news2, news3, news4]));
 store.dispatch(RemoveNews("Australia celebrates Australia 4"));
 store.dispatch(AddDidyoumean(["Mean 1", "Mean 2"]));
 store.dispatch(ClearDidyoumean());
 store.dispatch(Search("Paco is a nice guy"));
 store.dispatch(ClearSearch());
 store.dispatch(AddSuggestionsBulk(["Paco is a nice guy", "Paco is not a nice guy", "Maybe, Paco is a nice guy"]));
 store.dispatch(EditNews(news1));
 store.dispatch(CancelEdit());
 store.dispatch(SetNextToken("ASDASDAD-ASDADAS-ASDASDA-12313123"));
 store.dispatch(SetActualPage("ASD-WE-RWERWER-XFGDFGDG-23423424"));
 store.dispatch(AddError("Paco is a gay person"));
 store.dispatch(ClearError(0));


