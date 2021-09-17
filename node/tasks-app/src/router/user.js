const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
require('../db/connect');

const router = new express.Router();

// 1. C - user
// 2. C - we are doing something with the same resource

// D. Method is different

// localhost:300/addUser
// localhost:300/deleteUser
// localhost:300/updateUser
// localhost:300/getUser


// POST localhost:300/user
router.post('/user', async (req, res) => {
    try {
        const user = new User(req.body);
        const doc = await user.save();
        res.status(201).send(doc);
    } catch (e) {
        res.status(500).send('User not created!');
    }
});

// GET localhost:300/user
router.get('/user/:id', async (req, res) => {
    // req.query.name
    // req.body
    // req.params.name
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send(user);
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send();
    }
});

// DELETE localhost:300/user
router.delete('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await User.findByIdAndDelete(id);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Unable to delete');
    }
});

// PATCH localhost:300/user
router.patch('/user/:id', async (req, res) => {

    const allowedUpdate = ['name', 'password', 'age'];
    const updates = Object.keys(req.body);  // ['name', 'age', 'email']

    const validUpdate = updates.every((update) => allowedUpdate.includes(update));

    if (!validUpdate) {
        return res.status(400).send('Bad Request. Cannot update.');
    }

    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send(user);
        }
        return res.status(200).send(user);
    } catch (e) {
        console.log(e);
        return res.status(500).send('Could not update the user');
    }
});

router.post('/user/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email: email});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid Credentials!');
        }
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send('Not able to login');
    }
});

module.exports = router;

