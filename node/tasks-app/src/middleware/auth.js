const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = 'secret';

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            return res.status(400).send('Bad Request!');
        }

        req.user = user;
        req.token = token;
        console.log('End of mw');
        next();
    } catch (e) {
        console.log(e);
        return res.status(500).send('Error occured');
    }
}

module.exports = auth;


















// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const JWT_SECRET = 'secret';

// // req -> EXPRESS MIDDLEWARE -> res
// const auth = async (req, res, next) => {

//     try {
//         const token = req.header('Authorization').replace('Bearer ', '');
//         const decoded = jwt.verify(token, JWT_SECRET);
//         console.log(decoded);
//         const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

//         if (!user) {
//             throw new Error();
//         }

//         console.log(user);

//         next();
//     } catch (e) {
//         res.status(500).send('An error occured!');
//     }
// }

// module.exports = auth
