import React, { useEffect, useState } from "react";
import { DayStyle, DayIcon } from "./DayStyle";

const DailyForecast = (props) => {
	const [dayWeather, SetDayWeather] = useState({});
	const [icon, setIcon] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	SetDayWeather(props.dailyWeather);

	// useEffect(() => {
	// 	dayData();
	// }, [props.dailyWeather]);
	console.log(dayWeather);
	const dayData = () => {
		const data = [];
		for (let i = 0; i < dayWeather.length; i + 8) {
			data.push(dayWeather[i]);
		}
		return data;
	};
	console.log(dayData());

	const styles = {
		height: "30%",
		width: "100%",
		padding: "10px 0",
		display: "flex",
		justifyContent: "space-around",
		backgroundColor: "#bdc3c7",
		borderRadius: "15px",
	};

	return (
		<div style={styles}>
			{/* {isLoaded ? (
				<> */}
			<DayStyle>
				Mon
				<DayIcon src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
				75
			</DayStyle>
			<DayStyle>
				Tue
				<DayIcon src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
				75
			</DayStyle>
			<DayStyle>
				Wed
				<DayIcon src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
				75
			</DayStyle>
			<DayStyle>
				Thu
				<DayIcon src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
				75
			</DayStyle>
			<DayStyle>
				Fri
				<DayIcon src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
				75
			</DayStyle>
			{/* </>
			) : (
				<div>hi</div>)} */}
		</div>
	);
};

export default DailyForecast;
