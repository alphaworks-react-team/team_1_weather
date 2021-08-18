import "./App.css";
import Main from "./Components/Main/MainGlass";
import Body from "./Components/Body/Body";
import SideBar from "./Components/SideBar/SideBar";
import SoftBox from "./Components/SoftBox/SoftBox";
import styled from "styled-components";

import {
  currentWeatherData,
  dailyWeatherData,
  getCurrentLocationWeather,
} from "./utils/utils";

import { useEffect, useState } from "react";
import DailyForecast from "./Components/DailyForecast/DailyForecast";
function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [forcast, setForcast] = useState([]);

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
    // currentWeatherData().then(({ data }) => console.log("data", data));
    dailyWeatherData().then(({ data }) =>
      setForcast([...data.list.splice(0, 4)])
    );

    navigator.geolocation.getCurrentPosition(successful, error, options);

    async function fetchData() {
      await getCurrentLocationWeather(latitude, longitude);
    }

    fetchData();
    console.log(latitude, longitude);
  }, []);

  return (
		<div className="App">
			<Main>
				<Body>
					<SoftBox height={"20%"}>
						<h1>Hi</h1>
					</SoftBox>
					<SoftBox height={"60%"}>
						<SoftBox height={"20%"}>{dailyWeatherData}</SoftBox>
						<SoftBox height={"20%"}>{dailyWeatherData}</SoftBox>
						<SoftBox height={"20%"}>{dailyWeatherData}</SoftBox>
						<SoftBox height={"20%"}>{dailyWeatherData}</SoftBox>
						<SoftBox height={"20%"}></SoftBox>
						<SoftBox height={"20%"}></SoftBox>
						<SoftBox height={"20%"}></SoftBox>
						<SoftBox height={"20%"}></SoftBox>
					</SoftBox>
					<SoftBox height={"20%"}>
						<h1>Hi</h1>
					</SoftBox>
					<DailyForecast />
				</Body>
				<SideBar />
			</Main>
		</div>
	);
}

export default App;
