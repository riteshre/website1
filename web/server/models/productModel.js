const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img:{
        type: String
    }

})
module.exports = mongoose.model('product', productSchema)