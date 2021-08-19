import React, { useEffect, useState } from "react";
import { DayStyle, DayIcon } from "./DayStyle";

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
			{dayWeather.map((item,index) => (
				<DayStyle key={index}>
					Mon
					<DayIcon
						src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
						alt=""
					/>
					{item.main.temp}
				</DayStyle>
			))}
		</div>
	);
};

export default DailyForecast;
