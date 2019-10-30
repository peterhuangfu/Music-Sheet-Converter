const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const fs = require('fs')
const Busboy = require('busboy')

exports.saveMP3 = async (req, res) => {
  const busboy = new Busboy({
    headers: req.headers,
    limits: {
      fileSize: 50 * 1024 * 1024
    }
  })

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    const file_path = '/Users/huangfu/Desktop/upload/' + filename
    file.pipe(fs.createWriteStream(file_path))
  })

  busboy.on('finish', () => {
    res.status(200).send('complete')
  })

  return req.pipe(busboy)
}
