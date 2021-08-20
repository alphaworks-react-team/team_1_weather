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

  const days = (time) => {
    let day = new Date(time * 1000).toLocaleTimeString("en-US", {
      weekday: "short",
    });
    console.log(day);
    return day.substring(0, 3);
  };
  console.log(days(1629406800));
  const styles = {
    height: "30%",
    width: "100%",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    // backgroundColor: "#bdc3c7",
    borderRadius: "15px",
  };

  return (
    <div style={styles}>
      {dayWeather.map((item, index) => (
        <DayStyle key={index}>
          {days(item.dt)}
          <DayIcon
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt=""
          />
          {item.main.temp} °F
        </DayStyle>
      ))}
    </div>
  );
};

export default DailyForecast;
