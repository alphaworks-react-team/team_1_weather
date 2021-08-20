import React, { useEffect, useState } from "react";
import { DayStyle, DayIcon, TextData } from "./DayStyle";

const DailyForecast = (props) => {
	const [dayWeather, setDayWeather] = useState([]);

	useEffect(() => {
		dayData();
	}, [props.dailyWeather]);

	const dayData = () => {
		const dataArr = [];
		for (let i = 0; i < props.dailyWeather.length; i += 8) {
			dataArr.push(props.dailyWeather[i]);
		}
		setDayWeather(dataArr);
	};
	console.log(dayWeather);
	const days = (time) => {
		let day = new Date(time * 1000).toLocaleTimeString("en-US", {
			weekday: "short",
		});
		return day.substring(0, 3);
	};
	const styles = {
		height: "30%",
		width: "100%",
		padding: "10px 0",
		display: "flex",
		justifyContent: "space-around",
		borderRadius: "15px",
	};

	return (
		<div style={styles}>
			{dayWeather.map((item, index) => (
				<DayStyle key={index}>
					<TextData size="large">{days(item.dt)}</TextData>
					<DayIcon
						src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
						alt=""
					/>
					<TextData color="white" size="small">
						{item.weather[0].main}
					</TextData>
					<TextData size="large">{item.main.temp} °F</TextData>
				</DayStyle>
			))}
		</div>
	);
};

export default DailyForecast;
