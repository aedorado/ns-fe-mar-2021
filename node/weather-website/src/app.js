const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

// configuring middleware to server static resources
const publicPath = path.join(__dirname, '..\\public');
app.use(express.static(publicPath));


// http://localhost:3000/
app.get('', (req, res) => {
    res.send('Hello World!');
});

// http://localhost:3000/html
app.get('/html', (req, res) => {
    res.send('<h1>HTML form Express</h1><input placeholder="Enter name" />')
})

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

// http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('About Page');
});

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


