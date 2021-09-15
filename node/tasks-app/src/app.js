const express = require('express');
const User = require('./models/user');
require('./db/connect');

const port = 3000;
const app = express();
app.use(express.json());

// POST localhost:300/user
app.post('/user', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(doc => res.status(201).send('User Created!'))
        .catch(err => {
            res.status(500).send('User not created!');
        });

});

// // GET localhost:300/user
// app.get('/user', (req, res) => {
//     console.log(req.query.name);
//     res.send(req.query.name);
// });


app.listen(port, () => {
    console.log('Server started .. ');
});

