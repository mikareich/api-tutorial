const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')

// Import routes
const postRoute = require('./routes/posts')

app.use('/posts', postRoute)

app.get('/', (req, res) => {
  res.send('We are on Home')
})

// Connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to db')
  }
)

// How do we start listening to the server
app.listen(3000)
