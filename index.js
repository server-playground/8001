'use strict'

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('')
  console.log(req['url'])
  console.log(req['headers']['user-agent'])
  res.status(200).send('hello world')
})

app.listen(8001)

console.log('server is running on "http://localhost:8001/"')
