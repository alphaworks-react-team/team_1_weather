import axios from 'axios';
let API_key = process.env.REACT_APP_WEATHER_API_KEY;

export const currentWeatherData = async (city = "maryland") => {
    const request = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    );
    // console.log(request.data);
    return request;
}

export const dailyWeatherData = async (city = "maryland") => {
	const request = await axios.get(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`
	);
	console.log(request.data);
	return request;
};

export const getCurrentLocationWeather = async (lat, lon) => {
	const request = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
	);
	// console.log(request.data);
	return request;
};