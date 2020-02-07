const mongoose = require('mongoose');
const Blog = mongoose.model('Blog', {
    blog_title: {
        type: String
    },
    theme_image: {
        type: String
    },
    heading: {
        type: String
    },
    description: {
        type: String
    }
})
module.exports = Blog