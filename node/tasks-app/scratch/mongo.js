const { MongoClient, ObjectId } = require('mongodb');

// CRUD
// Create
// Read
// Update
// Delete

const connURL = 'mongodb://127.0.0.1:27017';
const dbName = 'tasks-app';

MongoClient.connect(connURL, (err, client) => {
    if (err) {
        return console.log('Unable to connect');
    }

    const db = client.db(dbName);

    // Find all
    // db.collection('users').find({  }).toArray((err, users) => {
    //     console.log(users);
    // });

    // db.collection('users').findOne({ age: 25 }, (err, user) => {
    //     if (err) {
    //         return console.log('Error occured!');
    //     }
    //     console.log(user);
    // });

    // db.collection('users').find({ age: {$gte: 20} }).toArray((err, res) => console.log(res));

    // db.collection('users').updateOne({
    //     'name': 'Saurabh'
    // }, {
    //     $set: {
    //         name: 'Saurabh Singh'
    //     }
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Error occured!');
    //     }
    //     console.log(res);
    // });

 
    // db.collection('users').deleteOne({
    //     age: 22
    // }).then(res => console.log(res));

    objid = new ObjectId();
    console.log(objid.getTimestamp());

    // db.collection('users').deleteMany({
    //     age: {$gte: 18}
    // }).then(res => console.log(res));

    // db.collection('users').updateOne({
    //     '_id': ObjectId("6140d526276f03940badb8af")
    // }, {
    //     $set: {
    //         name: 'Nikhil BK'
    //     }
    // }).then(res => console.log(res));

    // db.collection('users').updateOne({
    //     'name': 'Saurabh Singh'
    // }, {
    //     $set: {
    //         name: 'Saurabh'
    //     }
    // }).then(res => console.log(res));

    // db.collection('users').insertMany([{
    //     name: 'Saurabh',
    //     age: 20
    // }, {
    //     name: 'Nikhil',
    //     age: 21
    // }, {
    //     name: 'Shahid',
    //     age: 22
    // }], (err, res) => {
    //     if (err) {
    //         return console.log('Could not add resouce');
    //     } else {
    //         return console.log(res);
    //     }
    // });

})

