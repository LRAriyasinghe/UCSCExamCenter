const mongoose = require('mongoose');
const config = require('../config/database');

//Exam Schema
const RepeatExamSchema = mongoose.Schema({
    year:{
        type: String,
        required: true
    },
    semester:{
        type: String,
        required: true
    },
    repeatsubjects:{
        type: {}
       // required: true
    }
    
   
});

const RepeatExam = module.exports = mongoose.model('RepeatExam', RepeatExamSchema);

