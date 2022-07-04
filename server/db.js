const mongoose = require('mongoose')
require('dotenv').config()

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(process.env.MONGO_URI, connectionParams)
        console.log("Connected to Database")
    } catch(err) {
        console.log("Couldn't connect to Database")
        console.error(err)
    }
}