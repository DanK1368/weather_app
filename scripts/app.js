const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    console.log(data);

    // destructuring properties (neater way to write the above)
    const { cityDetails, weather } = data;

    // update weather template

    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update the icon images to display night/day
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeOfDaySrc = null;
    // if(weather.IsDaytime){
    //     timeOfDaySrc = 'img/day.svg';
    // } else {
    //     timeOfDaySrc = 'img/night.svg';
    // }
    let timeSrc = weather.IsDaytime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);
    

    // remove the d-none class if present

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
    // prevent default submit action
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with the new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(error => updateUI(error));
});