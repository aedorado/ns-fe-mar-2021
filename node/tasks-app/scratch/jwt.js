var jwt = require('jsonwebtoken');

var payload = {
    id: '6458452abdefcabdefc4434024'
};

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

var token = jwt.sign(payload, JWT_SECRET);

const data = jwt.verify(token, JWT_SECRET);

console.log('Token=', token);
console.log('Data=', data);
