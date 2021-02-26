const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Task = require('../../models/Task');
const validateTaskInput = require('../../validation/tasks');
const s3 = require('../../services/file-upload').s3;

router.get('/', (req, res) => {
    // Task.find()
    // .then(tasks => );

    Task.find()
        .sort({ date: -1 })
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ notasksfound: 'No tasks found' }));
});

router.get('/user/:user_id', (req, res) => {
    // debugger
    Task.find({ customer_id: req.params.user_id })
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ notasksfound: 'No tasks found from that user' }))
});

router.get('/driver/:driver_id', (req, res) => {
    // debugger
    Task.find({ driver_id: req.params.driver_id })
        .then(tasks => 
            tasks.forEach(el=>res.json(tasks))
        .catch(err =>
            res.status(404).json({ notasksfound: 'No tasks found from this driver' }))
        );
});

router.get('/:id', (req, res) => {
    // let task = Task.findById(req.params.id)
    // if(task){
    //     var promise = s3.getSignedUrlPromise('getObject', task.api)
    //             .then(function (url) {
    //                 task.imageUrl = url;
    //                 console.log(url)
    //             })
    //     return res.json(task)
    // }else{
    //     return res.status(404).json({ notaskfound: 'No task found with that ID' })
    // }
    let iurl = '';
    Task.findById(req.params.id).then(task => s3.getSignedUrlPromise('getObject', task.api)
        .then(function (url) {
            iurl = url;
        }))

    Task.findById(req.params.id)
        .then(task => {
            if(iurl !== ''){
                task.imageUrl = iurl;
                task.save()
            }
            
            return res.json(task)})
        .catch(err =>
            res.status(404).json({ notaskfound: 'No task found with that ID' })
        );
});

router.post('/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTaskInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        // debugger
        var promise = s3.getSignedUrlPromise('getObject', {
            Bucket: 'pigeon-task-package',
            Key: '1613521743984.jpg',
            Expires: 3600
        }).then(function (url) {
                req.body.imageUrl = url;
            })
        const newTask = new Task({
            pickup_loc: req.body.pickup_loc,
            dropoff_loc: req.body.dropoff_loc,
            drop_off_number: req.body.drop_off_number,
            weight: req.body.weight,
            distance: req.body.distance,
            phone: req.body.phone,
            price: req.body.price,
            status: req.body.status,
            customer_id: req.user.id,
            api: {
                Bucket: 'pigeon-task-package',
                Key: '1613521743984.jpg',
                Expires: 3600 },
            imageUrl: req.body.imageUrl
        });

        newTask.save().then(task => res.json(task));
    }
);

router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Task.findById(req.params.id)
            .then(task => {
                task.remove().then(res.json(task));
            })
            .catch(error =>
                res.status(404).json({ noTaskFound: "No Task found with that Id" })
            );
    }
);

router.put('/:id/edit', (req, res) => {
    // debugger
    Task.findByIdAndUpdate(req.params.id, req.body)
        .then(task => {
            res.json(task)
        })
        .catch(err =>
            res.status(404).json({ notaskfound: 'No task found with that ID' })
        );
});

module.exports = router;
