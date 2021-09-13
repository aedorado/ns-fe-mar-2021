const request = require('request');

function forecast(lat, long, callback) {
    const url = `http://api.weatherstack.com/current?access_key=21d9ce20f44a8aca04e8c8c0abae175e&query=${lat},${long}`

    request({url, json: true}, (err, response) => {
        if (err) {
            callback('Error has occured', null);
            return ;
        }
        const body = response.body;
        if (body.error) {
            callback('Error has occured', null);
        } else {
            callback(null, (`At ${body.current.observation_time} the temperature was ${body.current.temperature}℃ `));
        }
        // console.log(JSON.parse(resp.body));
    });
}

module.exports = forecast;