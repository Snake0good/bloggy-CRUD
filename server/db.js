const mongoose = require('mongoose')

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(process.env.DB, connectionParams)
        console.log("Connected to Database")
    } catch(err) {
        console.log("Couldn't connect to Database")
        console.error(err)
    }
}