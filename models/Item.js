const mongoose = require('mongoose')

const ListItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    time: {
        type: Date,
        required: true,
        default: Date.now

    }
})

module.exports = mongoose.model('ListItem', ListItemSchema)