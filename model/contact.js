const mongoose = require('mongoose');
const Contact = mongoose.model('Contact', {
    user_name: {
        type: String
    },
    user_email: {
        type: String
    },
    message: {
        type: String
    },
    contact_date: {
        type: String
    },
    contact_time: {
        type: String

    }
})
module.exports = Contact