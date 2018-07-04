const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    indexno:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    subjects:{
        type: {}
        
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findOne(id, callback);
};

module.exports.getUserByIndexNo = function(indexno, callback){
    const query = {indexno: indexno}
    User.findOne(query, callback);
};

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) =>{
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, res) => {
        if(err) throw err;

        if(res){
            callback(null, res);
        }
        
    });
};
module.exports.updateUserRegisteredExams = function(newUpdatedUser, callback){
    User.findOneAndUpdate({indexno: newUpdatedUser.indexno}, { $addToSet: { subjects: newUpdatedUser.subjects }} ,callback);

};
module.exports.getRegisteredExams = function(indexno, callback){
    console.log('Successfully Executed');
    const query = {indexno: indexno};
    User.findOne(query, callback);
    console.log(query);
};