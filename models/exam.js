const mongoose = require('mongoose');
const config = require('../config/database');

//Exam Schema
const ExamSchema = mongoose.Schema({
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

const Exam = module.exports = mongoose.model('Exam', ExamSchema);

// module.exports.getExamById = function(id, callback){
//     Exam.findById(id, callback);
// }


// module.exports.getExamByYear = function(year, callback){
//     const query = {year: year}
//     Exam.findOne(query, callback);
// }
// module.exports.getExamSemester = function(semester, callback){
//     const query = {semester: semester}
//     Exam.findOne(query, callback);
// }
// module.exports.addExam = function(newExam, callback){
    
//         if(err) throw err;
//         newExam.save(callback);
      
    
// }
