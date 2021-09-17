const express = require('express');
const Task = require('../models/task');
require('../db/connect');

const router = new express.Router();

router.post('/task', async (req, res) => {
    try {
        const task = new Task(req.body);
        const doc = await task.save();
        res.status(201).send(doc);
    } catch (e) {
        res.status(500).send('Not created');
    }
});

// GET localhost:300/task
router.get('/task', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).send(tasks);
    } catch (e) {
        res.status(500).send();
    }
});

router.delete('/task/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Task.findByIdAndDelete(id);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Unable to delete');
    }
});

router.patch('/task/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        return res.status(200).send(task);
    } catch (e) {
        return res.status(500).send();
    }
});

module.exports = router;
