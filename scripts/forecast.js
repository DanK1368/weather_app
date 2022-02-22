const key = 'Z4SwmmE8PbQgXxmrU1Jy0OzbUYFnWimp'; //api key

//get weather information
const getWeather = async (cityId) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityId}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

//get city information
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// getCity('schindellegi').then(data => {
//     return getWeather(data.Key)
// }).then(data => {
//     console.log(data);
// }).catch(error => console.log(error));

