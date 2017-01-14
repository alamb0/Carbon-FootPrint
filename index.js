var express = require('express')
var app = express()

app.get('/a', function (req, res) {
	console.log(req)
  res.send('Hello A!')
})

app.get('/b', function (req, res) {
	console.log(req)
  res.send('Hello B!')
})

app.get('/c', function (req, res) {
	console.log(req)
  res.send('Hello C!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})