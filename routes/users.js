const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
// const Exam = require('../models/exam');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        indexno: req.body.indexno,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        subjects: req.body.subjects
        
        
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: 'Failed to register user'});
        }else{
            res.json({success: true, msg:'User Registered Successfully'});
        }
    });

});

//Authenticate
router.post('/authenticate', (req, res, next) => {
   const indexno = req.body.indexno;
   const password = req.body.password;
   User.getUserByIndexNo(indexno, (err, user) => {
    if(err) throw err;

    if(!user){
        return res.json({success: false, msg: 'User not found'});
    }
 
    User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;

        if(isMatch){
            console.log(res);
            const token = jwt.sign(user.toJSON(), config.secret, {
                expiresIn: 604800 //1 week
            });

            res.json({
                success: true,
                token: 'JWT '+token,
                user: {
                    id: user._id,
                    indexno: user.indexno,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    subjects: user.subjects
                }
            });
        }else{
            return res.json({success: false, msg: 'Wrong Password'});
        }
    });
   });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

//Register for exams
router.put('/examregistration', (req, res, next) => {
    console.log('Result came to the backend');
    let newUpdatedUser = new User({
        indexno: req.body.indexno,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        subjects: req.body.subjects
        });

    var IndexNo = newUpdatedUser.indexno;
    console.log(IndexNo);
   // console.log()
   // User.findOneAndUpdate({indexno: newUpdatedUser.indexno}, { $set: { subjects: newUpdatedUser.subjects }} ,callback);


    User.updateUserRegisteredExams(newUpdatedUser, (err, user) => {
        if(err){
            res.json({success:false, msg:'Failed to update the exam registration'});
        } else {
            res.json({success:true, msg:'Successfully added the update'});
        }
    });

    });
    router.get('/readUserRegisteredExams', (req, res, next) => {
        console.log('Ariyasinghe');
        User.getRegisteredExams(req.query.indexno, (err, user) => {
            if(err){
                res.status(500).json({errmsg:err});
            } else {
                res.status(200).json({msg:user});
                //res.json(user);
            }
        });

   
        
    });
    router.get('/readallusers', (req, res) => {
        console.log('Correct');
        User.find({},(err, users) => {
            console.log('success');
            if(err)
                res.status(500).json({errmsg:err});
                res.status(200).json({msg:users});
        }).sort({ 'year': 1});
        
    });


module.exports = router;                                                                                                                                                                                                                                                                                                                                                                                                                                        