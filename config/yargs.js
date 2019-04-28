const argv = require('yargs').options({
    city: {
        alias: 'c',
        desc: 'city to get weather',
        demand: true
    }
}).argv;


module.exports = {
    argv
}