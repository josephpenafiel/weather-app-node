const axios = require('axios');


// function to get location's lattitute and longitude
const getLocLatLon = async (location) => { // argument is a string

    const encodedUrl = encodeURI(location); // makes url-save string

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'X-RapidAPI-Key': '1f27cd64c5mshfe710613feda956p1834d3jsn2c1c3672fde5'}
      });
    
    const resp = await instance.get(); 

    if( resp.data.Results.length === 0){
        throw new Error(`There are no results for ${ location }`);
    }

    const data = resp.data.Results[0]; // saving api Results at index in "data"

    const address = data.name; // lugar
    const latitude = data.lat;
    const longitude = data.lon;

    return {
        address,
        latitude,
        longitude
    }

}

module.exports = {
    getLocLatLon
}
