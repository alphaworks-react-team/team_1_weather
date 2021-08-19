import "./App.css";
import Main from "./Components/Main/MainGlass";
import Body from "./Components/Body/Body";
import SideBar from "./Components/SideBar/SideBar"
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import { currentWeatherData,dailyWeatherData, getCurrentLocationWeather } from "./utils/utils";
import { useEffect, useState } from "react";

function App() {
  const [latitude, setLatitude] = useState();
	const [longitude, setLongitude] = useState();

	const successful = (position) => {
		console.log(position.coords);
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

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(successful, error, options);

		async function fetchData() {
			await getCurrentLocationWeather(latitude, longitude);
		}
		fetchData();
		console.log(latitude, longitude);
	}, []);
  currentWeatherData();
  dailyWeatherData();
  return (
    <div className="App">
      <Main>
        <Body />
        <SideBar>
		<CurrentWeather />	
		</SideBar>
      </Main>
    </div>
  );
}

export default App;
