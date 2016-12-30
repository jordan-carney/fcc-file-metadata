'use-strict'

if (process.env.NODE_ENV !== 'production') require('dotenv')
const express = require('express')
const multer = require('multer')

const app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/', multer({ storage: multer.memoryStorage() }).single('size_me'), (req, res) => {
  res.json({ size: req.file.size })
})

app.listen(app.get('port'), () => {
    console.log('App is running! PORT:', app.get('port'))
})
