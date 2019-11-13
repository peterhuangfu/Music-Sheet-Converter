const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const fs = require('fs')
const Busboy = require('busboy')

exports.convert = async (req, res) => {
  try {
    await save_call_back(req, res)
  } catch (err) {
    console.error(err)
  }
}

const save_call_back = async (req, res) => {
  const busboy = new Busboy({
    headers: req.headers,
    limits: {
      fileSize: 50 * 1024 * 1024
    }
  })

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== 'audio/mpeg' && mimetype !== 'audio/wave') {
      res.status(403).json({
        message: 'error format',
        type: 'fail'
      })

      file.resume()
    }
    else {
      const file_path = '/Users/huangfu/Desktop/upload/' + filename
      file.pipe(fs.createWriteStream(file_path))

      busboy.on('finish', () => {
        call_sheep_server(req)
      })
    }
  })

  return req.pipe(busboy)
}

const call_sheep_server = async (req) => {
  console.log('hi there.')
}
