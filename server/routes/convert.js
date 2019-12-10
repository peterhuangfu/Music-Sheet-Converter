const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const Works = require('../models/Works')
const User = require('../models/User')
const fs = require('fs')
const Busboy = require('busboy')

exports.convert_for_music = async (req, res) => {
  try {
    await save_music_file(req, res)

  } catch (err) {
    console.error(err)
  }
}

exports.convert_for_music_information = async (req, res) => {
  try {
    await save_music_information(req, res)

  } catch (err) {
    res.status(403).json({
      message: 'save information fail',
      type: 'fail'
    })
  }
}

const save_music_file = async (req, res) => {
  // add console.log to print formData  
  // console.log(req.body.file) 
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
        res.status(200).send({
          message: file_path,
          type: 'success'
        })
      })
    }
  })

  return req.pipe(busboy)
}

const save_music_information = async (req, res) => {
  const works_num = await Works.find({}).count()
  const work_id = ObjectId()
  const this_id = works_num + 1
  const file_path = req.body.file_path

  const newWork = new Works({
    _id: work_id,
    file_id: this_id.toString(),
    pdf_file_path: '',
    sep_piano_path: '',
    sep_human_path: '',
    title: req.body.title,
    description: req.body.description,
    uploader: ObjectId(req.session.current_user._id),
    click_times: 0,
    download_times: 0,
    seperate: req.body.isseperate,
    convert: req.body.isconvert,
    public: req.body.ispublic
  })

  await newWork.save()
  await User.updateOne({ google_id: req.session.current_user.google_id }, { $push: { upload_works: work_id } })

  res.status(200).json({
    message: 'save information success',
    type: 'success'
  })

  call_sheep_server(file_path)
}

const call_sheep_server = async (path) => {
  console.log(path)
}
