const request = require('request-promise')
const exploreRoute = require('./explore')
const convertRoute = require('./convert')
const fs = require('fs')

const wrap = fn => (...args) => fn(...args).catch(args[2])

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('hello world.')
  })

  app.get('/api/readpdf', wrap(exploreRoute.downloadPDF))
  app.post('/api/upload_mp3', convertRoute.saveMP3)
}
