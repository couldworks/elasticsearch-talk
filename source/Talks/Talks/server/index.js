const express = require('express')
const news = require('./news.json')
const suggestions = require('./suggestions.json')
const didyoumean = require("./didyoumean.json")
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const byName = name => news =>
    name.toLowerCase() === news.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/didyoumean', (req, res) =>
        res.status(200).json(didyoumean)
    )
    .get('/suggestions', (req, res) =>
        res.status(200).json(suggestions)
    )
    .get('/news', (req, res) =>
        res.status(200).json(news)
    )
    .get('/news/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    res.status(200).json(news) //news.hits.filter(byName(req.params.name))
                ),
            delay
        )
    )

app.listen(port, () => console.log('Ski resort app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))