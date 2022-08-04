//Prashant Chakraborty

//Start time: 7:30pm CST 
//Break time : 8:18pm CST
//End Time: 8:38pm CST

// const ApiKey = /*Insert your API Key*/
// const weatherApiUrl = 'https://api.openweathermap.org/data/2.5'

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${apiKey}&units=metric`;


// const cityWeather = (searchData) => {

//         const [lat, lon] = searchData.value.split(" ");
    
//         const currentWeatherFetch = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`)
    
//         Promise.all([currentWeatherFetch, forecastFetch])
//         .then(async(response) => {

//           const weatherResponse = await response[0].json();
//           return weatherResponse;

//         }).catch((err) => console.log(err))
// }

// console.log(cityWeather("Lagos"))


// let response = fetch(`${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`), {
//     "method": "GET"
//   })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const cityWeather = () => {
    fetch(`${weatherUrl}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(() => {
        msg.textContent = "Please search for a valid city 😩";
    });
}

console.log(cityWeather());