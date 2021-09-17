var bcrypt = require('bcrypt');

let password = 'user submitted password';

var hp = bcrypt.hashSync(password, 8);

console.log(hp);

console.log(bcrypt.compareSync('user submitted password', hp));

// // without salt
// hash(password) -> ...

// // with salt 
// hash(password + salt) -> SK5efjOcY

// password -> hash 
// sha256
// md5

// // Rainbow Table
// a -> ...
// b -> ... 
// c -> ... 
// randomseq -> ... 
// i wanna hash this string + salt -> SK5efjOcY
// i wanna hash this string -> dlfkaDG43


