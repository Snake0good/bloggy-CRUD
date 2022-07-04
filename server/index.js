const express = require('express')
const cors = require('cors')
const path = require('path')
const connectMongoDB = require('./db')
const PORT = process.env.PORT || 3001
const routes = require('./routes/route')

require('dotenv').config()

const app = express()

// connect to database
connectMongoDB()

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use(routes)


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})