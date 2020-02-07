const mongoose = require('mongoose');
const Comment = mongoose.model('Comment', {
    user_name: {
        type: String
    },
    user_email: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type: String
    },
    product_id:{
        type:String
    }
})
module.exports = Comment