const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Task = require('../models/task');
const validator = require('validator');

const JWT_SECRET = 'secret';

const userSchema = new mongoose.Schema({
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
});

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.tokens;
    delete userObject.password;

    return userObject;
}

userSchema.methods.generateAuthenticationToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, JWT_SECRET);
    user.tokens = [...user.tokens, { token }];
    await user.save();
    return token;
}

// MONGOOSE MIDDLEWARE
userSchema.pre('save', function (next) {    // IMPORTANT do not use arrow function here as this will lose context
    const user = this;
    if (user.isModified('password')) {
        user.password = bcrypt.hashSync(user.password, 4);
    }
    next();
});

userSchema.pre('remove', async function(next) {
    const user = this;
    console.log(user);
    await Task.deleteMany({ owner: user._id });
    next();
});


const User = mongoose.model('User', userSchema); 

module.exports = User;
