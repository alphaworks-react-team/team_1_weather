import SoftBox from "../SoftBox/SoftBox";
import { dailyWeatherData } from "../../utils/utils";
import { useEffect, useState } from "react";

function HourlyData() {
  const [forecast, setforecast] = useState([]);

  const styles = {
    margin: "0px",
    width: "25%",
    textAlign: "center",
    borderRadius: "50px",
    background: "#e0e0e0",
    boxShadow: "20px 20px 60px #bebebe",
  };

  const unixTime = (sec) => {
    const date = new Date(sec * 1000);
    const timestr = date.toLocaleTimeString(sec);
    return timestr;
  };

  useEffect(() => {
    dailyWeatherData().then(({ data }) =>
      setforecast([...data.list.splice(0, 8)])
    );
  }, []);

  // const divStyles = {
  //   width: "40%",
  //   border: "1px solid black",
  // };
  return (
    <SoftBox height={"50%"}>
      {forecast.map((element, index) => (
        <div style={styles} key={index}>
          <p>{unixTime(element.dt)}</p>
          <p>{element.weather[0].description}</p>
          <p>{Math.round(element.main.temp)}°F</p>
        </div>
      ))}
    </SoftBox>
  );
}

export default HourlyData;
