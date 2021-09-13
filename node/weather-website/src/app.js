const hbs = require('hbs');
const path = require('path');
const express = require('express');
const geocode = require('./goecode');
const forecast = require('./forecast');

const PORT = 3000;

const app = express();

// configuring middleware to server static resources
const publicPath = path.join(__dirname, '..\\public');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..\\views\\templates'));
// hbs if you encounter a partial then you have to get the partial form this directory
hbs.registerPartials(path.join(__dirname, '..\\views\\partials'));
app.use(express.static(publicPath));


// if (!address) {
//     console.log('Please provide an address!');
// } else {
// }

// http://localhost:3000/gw
app.get('/gw', (req, res) => {

    console.log(req.query.address);

    if (!req.query.address) {
        res.send({
            error: 'Please provide an address!'
        });
        return ;
    }

    geocode(req.query.address, (err, response) => {
        if (err) {
            res.status(500).send({
                error: 'API failed!'
            });
            return ;
        }

        let place_name = response.features[0].place_name;
        let lat = response.features[0].center[1];
        let long = response.features[0].center[0]

        forecast(lat, long, (err, response) => {
            if (err) {
                res.status(500).send({
                    error: 'API failed!'
                });
                return ;
            }
            res.status(200).send({
                temp: response,
                place: `The place is ${place_name}`
            });
        });
    });
});


// http://localhost:3000/
app.get('', (req, res) => {
    res.render('index', {
        username: 'Veeru',
        currentYear: new Date().getFullYear()
    });
});

// http://localhost:3000/
app.get('/about', (req, res) => {
    res.render('about', {
        username: 'Veeru',
        currentYear: new Date().getFullYear()
    });
});

// http://localhost:3000/
app.get('/weather', (req, res) => {
    res.render('weather', {
        username: 'Veeru',
        currentYear: new Date().getFullYear()
    });
});

// http://localhost:3000/html
app.get('/html', (req, res) => {
    res.send('<h1>HTML form Express</h1><input placeholder="Enter name" />')
});

// http://localhost:3000/json
app.get('/json', (req, res) => {
    res.send([{
        name: "Newton",
        location: "England",
    }, {
        name: "Newton",
        location: "England",
    }]);
});

// // http://localhost:3000/about
// app.get('/about', (req, res) => {
//     res.send('About Page');
// });

// http://localhost:3000/products
app.get('/products', (req, res) => {
    if (!req.query.q) {
        res.send('Please provide the search query');
    }
    let query = req.query.q;
    let limit = req.query.limit;
    var pl = ["Books", "Fridge", "WM", "pendrive", "pen", "penny", "pending"];
    pl = pl.filter((pli) => pli.includes(query));
    pl = pl.slice(0, limit);
    res.send(pl);
});

app.get('*', (req, res) => {
    res.send('<h1>404 - Resource not found on server</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


