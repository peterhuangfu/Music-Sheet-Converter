const request = require('request-promise')
const exploreRoute = require('./explore')
const convertRoute = require('./convert')
const loginRoute = require('./login')
const fs = require('fs')

const wrap = fn => (...args) => fn(...args).catch(args[2])

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('hello world.')
  })

  app.get('/api/downloadpdf', wrap(exploreRoute.downloadPDF))
  app.get('/api/openpdf', wrap(exploreRoute.openPDF))
  app.post('/api/convert', wrap(convertRoute.convert))

  // login
  app.post('/api/login/google', wrap(loginRoute.GoogleLogin))
  app.get('/api/login/check_status', wrap(loginRoute.CheckLoginStatus))
  app.get('/api/logout', wrap(loginRoute.Logout))
}
