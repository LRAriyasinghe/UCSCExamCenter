const mongoose = require('mongoose');
const config = require('../config/database');

//Exam Schema
const PostExamSchema = mongoose.Schema({
    year:{
        type: String,
        required: true
    },
    semester:{
        type: String,
        required: true
    },
    subjects:{
        type: {}
       // required: true
    }
   
});

const PostExam = module.exports = mongoose.model('PostExam', PostExamSchema);

