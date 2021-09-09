const request = require('request');

function geocode(address, callback) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWVkb3JhZG8iLCJhIjoiY2t0Ym1xeDlqMDQ3MjJ4bzVhaDRyajkwMyJ9.Z3BsXgTAZtZOqTQjtz87zQ&limit=1'
    request({url, json: true}, (err, response) => {
        if (err) {
            callback('An error occured', response);
        } else {
            callback(null, response.body);
        }
    });
}

module.exports = geocode;
