const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const staticFilesPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')

app.use(logger('dev'))

app.use(express.static(staticFilesPath))

app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/handle-submit', (req, res) => {
  res.render('handle-submit', {
    body: JSON.stringify(req.body, null, 2)
  })
})

app.listen(port, () => {
  console.log('App started on port ' + port)
})
