const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/cookies', (req, res) => {
  res.send(JSON.stringify({
    "cookies": req.cookies
  }))
})

app.post('/comment', (req, res) => {
  console.log(req.body)
  res.cookie("comment", req.body.comment)
  res.send(JSON.stringify({
    "comment": req.cookies.comment
  }))
})

app.get('/login', (req, res) => {
  console.log(req.cookies)
  res.send(JSON.stringify({
    "username": req.cookies.username,
    "password": req.cookies.password
  }))
})

app.post('/signup', (req, res) => {
  console.log(req.body)
  res.cookie("username", req.body.username)
  res.cookie("password", req.body.password)
  res.send(JSON.stringify({
    "username": req.body.username,
    "password": req.body.password
  }))
})

app.listen(3000, () => console.log('Hello World app berjalan di http://localhost:3000'))