const request = require('request-promise')
const config = require('../../config')
const ObjectId = require('mongoose').Types.ObjectId
const fs = require('fs')

// ......express is so amazing = =
exports.downloadPDF = async (req, res) => {
  const filePath = '/Users/huangfu/Downloads/ML/hw2/report.pdf'

  try {

    await res.download(filePath)

  } catch (err) {

    res.status(403).json({
      message: 'download PDF file fail',
      type: 'fail'
    })

    console.error(err)
  }
}

exports.openPDF = async (req, res) => {
  const filePath = '/Users/huangfu/Downloads/ML/hw2/report.pdf'

  try {

    await fs.readFileSync(filePath , (err, data) => {
      if (err)
        console.error(err)

      res.contentType('application/pdf')
      res.send(data)
    })

  } catch (err) {
    
    res.status(403).json({
      message: 'open PDF file fail',
      type: 'fail'
    })

    console.error(err)
  }

  
}
