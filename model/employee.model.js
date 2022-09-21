const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    rollno: {
        type: String
    },
    standard: {
        type: String
    },
    city: {
        type: String
    }
});


mongoose.model('Employee', employeeSchema);