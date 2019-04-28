const axios = require('axios');


const getWeather = async (lat, lon) => {

    try{
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=43653b8c8b23297305d1ed3fae643f8f&units=metric`);
        return resp.data.main.temp;
    } catch(e) {
        return 'Something failed!';
    }
   

}


module.exports = {
    getWeather
}