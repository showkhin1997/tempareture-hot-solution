const API_KEY = `9accdf7d62d1ca6e4c7be76d7a674e36`;

const searchTempareture = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempareture(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTempareture = tepareture => {
    setInnerText('city', tepareture.name);
    setInnerText('tempareture', tepareture.main.temp);
    setInnerText('condtiton', tepareture.weather[0].main);
    // set weather icon
    const url = `https://openweathermap.org/img/wn/${tepareture.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weathe-icon');
    imgIcon.setAttribute('src', url);
}