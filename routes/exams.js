const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Exam = require('../models/exam');
const User = require('../models/user');
const PostExam = require('../models/postexam');
const RepeatExam = require('../models/repeatexam');

router.get('/create', (req, res, next) => {
    res.send('CREATE');
});

//Subject Register
router.post('/subjectregister', (req, res, next) => {
    let newExam = new Exam({
        year: req.body.year,
        semester: req.body.semester,
        subjects: req.body.subjects

        });

        newExam.save((err,Exam)=>{
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:Exam});
        });

});
//Subject Register
router.post('/repeatsubjectregister', (req, res, next) => {
    let newRepeatExam = new RepeatExam({
        year: req.body.year,
        semester: req.body.semester,
        repeatsubjects: req.body.repeatsubjects

        });

        newRepeatExam.save((err,RepeatExam)=>{
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:RepeatExam});
        });

});

//Subject Register
router.post('/postgraduatesubjectregister', (req, res, next) => {
    let newPostExam = new PostExam({
        year: req.body.year,
        semester: req.body.semester,
        subjects: req.body.subjects

        });

        newPostExam.save((err,PostExam)=>{
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:PostExam});
        });

});

router.get('/readsubject', (req, res) => {
    console.log('Awaa');
    Exam.find({},(err, exams) => {
        console.log('success');
        if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:exams});
    }).sort({ 'year': 1});
    
});
router.get('/readrepeatsubject', (req, res) => {
    console.log('Awaa');
    RepeatExam.find({},(err, repeatexams) => {
        console.log('success');
        if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:repeatexams});
    }).sort({ 'year': 1});
    
});
router.get('/postreadsubject', (req, res) => {
    console.log('Awaa');
    PostExam.find({},(err, postexams) => {
        console.log('success');
        if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:postexams});
    }).sort({ 'year': 1});
    
});




module.exports = router;  