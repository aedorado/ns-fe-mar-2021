const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-app');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(val) {
            if (!validator.isEmail(val)) throw new Error('Email is invalid');
        }
    },
    age: {
        type: Number, 
        validate(val) {
            if (val < 0) throw new Error('Age cannot be negative');
        }
    },
    password: {
        type: String,
        minLength: 4,
        required: true,
        validate(val) {
            if (val.toLowerCase() === 'password') throw new Error('Password cannot be password!');
        }
    }
}); 

const user = new User({
    name: 'Shaun Michaels',
    email: 'bs@wwe.com', 
    email: 'bs1@wwe.com', 
    age: 45,
    password: 'pass'
});

user.save().then(console.log).catch(console.log);
