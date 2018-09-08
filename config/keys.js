//keys.js

if (process.env.NODE_ENV === 'production') {
    //production, return prod key
    module.exports = require('./prod');
} else {
    // dev, return dev key
    module.exports = require('./dev');
}