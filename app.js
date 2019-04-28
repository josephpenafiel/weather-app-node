/*
node app -d Ciudad Pais 
-> clima
*/

const argv = require('./config/yargs').argv;
const location = require('./location/location');
const weather = require('./weather/weather');


// location.getLocLatLon(argv.city)
//             .then( (resp) => {
//                 console.log(resp);
//             })
//             .catch( (err) => {
//                 console.log(err);
//             });


// weather.getWeather(48.860001,2.350000)
//             .then( console.log )
//             .catch( console.log );


const getInfo = async (adr) => {

    try{
        const geo = await location.getLocLatLon(adr);
        const tmpture = await weather.getWeather(geo.latitude, geo.longitude);
        return `The weather in ${ geo.address } is ${ tmpture } degrees celcius`;
    } catch(e){
        return 'Couldn\'t find weather';
    }

}


let info = getInfo(argv.city)
        .then(console.log) // el clima de xx es de xx *C
        .catch(console.log); // no se pudo determinar clima

