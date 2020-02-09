const mongoose = require('mongoose');
const Blog_Comment = mongoose.model('Blog_Comment', {
    user_name: {
        type: String
    },
    user_email: {
        type: String
    },
    user_message: {
        type: String
    },
    user_image: {
        type: String
    }
})
module.exports = Blog_Comment