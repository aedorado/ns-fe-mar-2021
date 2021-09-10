const https = require('https');

const address = 'Taj Mahal'

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWVkb3JhZG8iLCJhIjoiY2t0Ym1xeDlqMDQ3MjJ4bzVhaDRyajkwMyJ9.Z3BsXgTAZtZOqTQjtz87zQ&limit=1';

const req = https.request(url, (resp) => {

    let allData = '';
    resp.on('data', (chuck) => {
        allData = allData + chuck.toString();
    });

    resp.on('end', () => {
        console.log(allData);
    });

});

req.on('error', (err) => {
    console.log('Error occured');
})

req.end();
