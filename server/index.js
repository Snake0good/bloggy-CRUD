const express = require('express')
const cors = require('cors')
const path = require('path')
const connectMongoDB = require('./db')
const PORT = process.env.PORT || 3001
const routes = require('./routes/route')

require('dotenv').config()
const publicPath = path.join(__dirname, '..', '../client/build')

const app = express()

// connect to database
connectMongoDB()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.static(publicPath))

// routes
app.use(routes)


app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})