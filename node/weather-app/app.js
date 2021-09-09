const forecast = require('./forecast.js');
const geocode = require('./goecode.js');

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address!');
} else {
    geocode(address, (err, response) => {
        if (err) {
            console.log(err);
            return ;
        }

        let place_name = response.features[0].place_name;
        let lat = response.features[0].center[1];
        let long = response.features[0].center[0]
        console.log(`The place is ${place_name}`);

        forecast(lat, long, (err, response) => {
            if (err) {
                console.log(err);
                return ;
            }
            console.log(response);
        });

    });
}




