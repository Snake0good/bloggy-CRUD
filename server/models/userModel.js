const mongoose = require('mongoose')

const UserModel = mongoose.model('User', mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }, 
    {timestamps: true}
))

module.exports = UserModel