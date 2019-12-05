const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const path = require('path')
const moment = require('moment')
const fs = require('fs')
const User = require('../models/User')
const Works = require('../models/Works')

exports.getPublicPDF = async (req, res) => {
  try {
    const time_range = parseInt(req.query.time_range)

    const time_to = new Date(moment().format('YYYY-MM-DD HH:mm:ss'))
    const time_from = new Date(moment().subtract(time_range, 'd').format('YYYY-MM-DD HH:mm:ss'))
    
    if (time_range !== 0) {
      all_works = await Works.find({
        ispublic: true,
        created_at : { 
          $lt: time_to, 
          $gte: time_from
        }
      }).lean()
    }
    else {
      all_works = await Works.find({ ispublic: true }).lean()
    }

    all_works.forEach(e => {
      const uploader = ObjectId(e.uploader)
      const user = await User.findOne({ _id: uploader }, { username: 1 })
      e.uploader = user.username
    })

    const response = all_works
    
    res.status(200).send(response)

  } catch (err) {
    res.status(403).json({
      message: 'get works fail',
      type: 'fail'
    })
  }
}

exports.downloadPDF = async (req, res) => {
  const user = req.session.current_user
  const pdf_id = req.body.pdf_id
  const filePath = req.body.file_path
  
  try {
    await User.findOne({ google_id: user.google_id }, { $push: { download_works: pdf_id } })

    work = await Works.findOne({ _id: ObjectId(pdf_id) }, { download_times: 1 })
    await Works.updateOne({ _id: ObjectId(pdf_id) }, { $set: { download_times: work.download_times+1 } })

    await res.download(filePath)

  } catch (err) {
    res.status(403).json({
      message: 'download PDF file fail',
      type: 'fail'
    })
  }
}

exports.openPDF = async (req, res) => {
  const pdf_id = req.body.pdf_id
  const filePath = req.body.file_path
  // const filePath = '/Users/huangfu/Downloads/ML/hw2/report.pdf'

  try {
    work = await Works.findOne({ _id: ObjectId(pdf_id) }, { click_times: 1 })
    await Works.updateOne({ _id: ObjectId(pdf_id) }, { $set: { click_times: work.click_times+1 } })

    const file = fs.readFileSync(filePath)
    res.contentType('application/pdf')
    res.send(file)

  } catch (err) {
    res.status(403).json({
      message: 'open PDF file fail',
      type: 'fail'
    })
  } 
}
