const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const path = require('path')
const fs = require('fs')

exports.downloadPDF = async (req, res) => {
  const filePath = '/Users/huangfu/Downloads/ML/hw2/report.pdf'
  try {
    await res.download(filePath)
  } catch (err) {
    res.status(403).json({
      message: 'download PDF file fail',
      type: 'fail'
    })
  }
}

exports.openPDF = async (req, res) => {
  const filePath = '../report.pdf'
  try {
    const file = fs.readFileSync(path.join(__dirname, filePath))
    res.contentType('application/pdf')
    res.send(file)
  } catch (err) {
    res.status(403).json({
      message: 'open PDF file fail',
      type: 'fail'
    })
  } 
}
