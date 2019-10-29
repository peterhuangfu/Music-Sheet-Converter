const request = require('request-promise')
const exploreRoute = require('./explore')
const convertRoute = require('./convert')
const multer  = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log(file.path)
    callback(null, 'public/upload/')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})

// const fileFilter = function (req, file, callback) {
//   if (file.mimetype === 'audio/mp3' || file.mimetype === 'audio/wav') {
//     callback(null, true)
//   }
//   else {
//     callback(new Error('File format should be MP3, WAV'), false)
//   }
// }
 
const upload_music = multer({ storage: storage })

const wrap = fn => (...args) => fn(...args).catch(args[2])

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('hello world.')
  })

  app.get('/api/readpdf', wrap(exploreRoute.downloadPDF))
  app.post('/api/upload_mp3', convertRoute.saveMP3)

  // app.get("/advertiser/overview",(req,res)=>{
  //  res.render("advertiser/overview")
  // })

  //api
  // app.get('/api/user/status',wrap(userRoute.get_user_status))
}
