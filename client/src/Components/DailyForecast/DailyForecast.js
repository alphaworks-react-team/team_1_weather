import React from "react";
import { DayStyle } from "./DayStyle";

const DailyForecast = (props) => {
	const styles = {
		height: "30%",
		width: "100%",
		padding: "10px 0",
		display: "flex",
		justifyContent: "space-around",
		backgroundColor: "#bdc3c7",
		// backgroundColor: "rgba( 23, 148, 183, 0.25 )",
	};
	return (
		<div style={styles}>
			<DayStyle>{props.children} hi</DayStyle>
			<DayStyle>{props.children} hi</DayStyle>
			<DayStyle>{props.children} hi</DayStyle>
			<DayStyle>{props.children} hi</DayStyle>
			<DayStyle>{props.children} hi</DayStyle>
		</div>
	);
};

export default DailyForecast;
