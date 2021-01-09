const bcrypt = require('bcrypt');

let password = bcrypt.hashSync('98765', 9);
console.log(password);
