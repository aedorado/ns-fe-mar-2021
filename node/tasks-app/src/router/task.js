const express = require('express');
const Task = require('../models/task');
const auth = require('../middleware/auth');
require('../db/connect');

const router = new express.Router();

router.post('/task', auth, async (req, res) => {
    try {
        const task = new Task({ ...req.body, owner: req.user._id });
        const doc = await task.save();
        res.status(201).send(doc);
    } catch (e) {
        console.log(e);
        res.status(500).send('Not created');
    }
});

// GET localhost:300/task
// GET localhost:300/task?completed=true
// GET localhost:300/task?limit=5
// GET localhost:300/task?sortBy=description:desc
// GET localhost:300/task?sortBy=createdAt:asc
router.get('/tasks', auth, async (req, res) => {

    const match = {};
    const sort = {};

    if (req.query.completed === 'true') {
        match.completed = req.query.completed === 'true';
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':');
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
        console.log(sort);
    }

    try {
        await req.user.populate({
            path: 'tasks',
            match, 
            options: {
                sort,
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
            }
        });
        res.status(200).send(req.user.tasks);
        // const tasks = await Task.find({ owner: req.user._id });
        // res.status(200).send(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
});

router.delete('/task/:id', auth, async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await Task.findOneAndDelete({ _id, owner: req.user._id }); 
        if (!result) {
            res.status(404).send('Not found!');
        }
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Unable to delete');
    }
});

router.patch('/task/:id', auth, async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await Task.findOneAndUpdate({ _id, owner: req.user._id }, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        return res.status(200).send(task);
    } catch (e) {
        return res.status(500).send();
    }
});

module.exports = router;

// virtual is field that does not exist directly on the schema/object
// it can be derived from/on the schema/object
// Deriving/Poulating a virtual? call pouplate with virtual name - user.populate(tasks) 
// Accessing? as a normal field on object (user.tasks)