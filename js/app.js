const API_KEY = `c0086d04954a83612c8dc82ea3ee0b13`;

searchTemperature = () =>{
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))

    // console.log(url);

}
const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
    document.getElementById(id).innerText = text;
    document.getElementById(id).innerText = text;
    // const cityID = document.getElementById('city');
    // cityID.innerText = text;
    // console.log(cityID);
    // console.log(text);
}
const displayTemperature = (TempData) =>{
    setInnerText('city', TempData.name);
    setInnerText('temperature', TempData.main.temp);
    setInnerText('condition', TempData.weather[0].main);
    
    // Set icon for weather
    const url = `https://openweathermap.org/img/wn/${TempData.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weatherIcon');
    weatherIcon.setAttribute('src', url)
    console.log(TempData.weather[0].icon);
};
