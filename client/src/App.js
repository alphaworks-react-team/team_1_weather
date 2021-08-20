import { useEffect, useState } from "react";
import Main from "./Components/Main/MainGlass";
import Body from "./Components/Body/Body";
import rain from "./assets/video/rain.mp4";
import clouds from "./assets/video/Scattered Clouds.mp4";
import snow from "./assets/video/Snow.mp4";
import SideBar from "./Components/SideBar/SideBar";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
import Search from "./Components/Search/Search";
import TimeDay from "./Components/Time/TimeDay";
import HistoryContainer from "./Components/History/History";
import {
	currentWeatherData,
	dailyWeatherData,
  getCurrentLocationWeather,
  chooseVideo
} from "./utils/utils";
import HourlyData from "./Components/HourlyData/HourlyData";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import { AppStyle } from "./AppStyle";
import Video from "./Components/Video/Video";

function App() {
	const [latitude, setLatitude] = useState();
	const [longitude, setLongitude] = useState();
	// const [forecast, setforecast] = useState([]);
	const [currentWeather, setCurrentWeather] = useState({});
	const [dailyWeather, setDailyWeather] = useState();
	const [currentLocationWeather, setCurrentLocationWeather] = useState();
	const [history, setHistory] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	const successful = (position) => {
		// console.log(position.coords);
		setLatitude(position.coords.latitude);
		setLongitude(position.coords.longitude);
	};

	const error = (err) => {
		console.log(err);
	};

	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	};

	// useEffect(() => {

	//   dailyWeatherData().then(({ data }) =>
	//     setforecast([...data.list.splice(0, 4)])
	//   );

	// navigator.geolocation.getCurrentPosition(successful, error, options);

	// async function fetchData() {
	//   await getCurrentLocationWeather(latitude, longitude).then(({ data }) =>
	//     // console.log(data)
	//     setCurrentLocationWeather(data)
	//   );
	// }

	// fetchData();
	// console.log(latitude, longitude);
	// }, []);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async (data) => {
			const lat = data.coords.latitude;
			const lon = data.coords.longitude;
			const weather = await getCurrentLocationWeather(lat, lon);
			setCurrentLocationWeather(weather.data);
			// console.log("location weather:", weather.data);
		});
	}, []);
console.log(currentLocationWeather);
	const SearchSubmit = async (e, value) => {
		e.preventDefault();
		console.log(value);
		const weather = await currentWeatherData(value);
		const dailyWeather = await dailyWeatherData(value);
		// console.log("current weather:", weather);
		// console.log("daily weather:", dailyWeather);
		setCurrentWeather(weather.data);
		setDailyWeather(dailyWeather.data);
		setHistory([...history, weather.data]);
		// setCurrentLocationWeather(null);
		setIsLoaded(true);
	};
  return (
    // chooseVideo(currentLocationWeather.weather[0].main)
		<AppStyle>
			<Video src={rain} loop muted autoPlay />
			<Main>
				<Body>
					<TimeDay
						weather={currentWeather ? currentWeather : currentLocationWeather}
					/>
					<HourlyData />

					{isLoaded && <DailyForecast dailyWeather={dailyWeather.list} />}
				</Body>
				<SideBar>
					<Search SearchSubmit={SearchSubmit} />
					<CurrentWeather
						location={currentLocationWeather && currentLocationWeather.name}
						date={currentLocationWeather && currentLocationWeather.dt}
						temp={currentLocationWeather && currentLocationWeather.main.temp}
						description={
							currentLocationWeather &&
							currentLocationWeather.weather[0].description
						}
						wind={currentLocationWeather && currentLocationWeather.wind.speed}
						humidity={
							currentLocationWeather && currentLocationWeather.main.humidity
						}
					/>
					<HistoryContainer history={history} />
				</SideBar>
			</Main>
		</AppStyle>
	);
}

export default App;
