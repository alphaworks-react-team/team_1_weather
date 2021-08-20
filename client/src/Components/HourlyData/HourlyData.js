import SoftBox from "../SoftBox/SoftBox";
import { dailyWeatherData } from "../../utils/utils";
import { useEffect, useState } from "react";
import { RiContrastDropLine } from "react-icons/ri";

function HourlyData(props) {
  const [forecast, setForecast] = useState();

  const styles = {
    margin: "0px",
    width: "25%",
    textAlign: "center",
    borderRadius: "50px",
    // background: "#e0e0e0",
    // boxShadow: "20px 20px 60px #bebebe",
    boxShadow: "0 8px 32px 0 rgba(3, 3, 135, 0.2)",
    backdropFilter: " blur(4px)",
    // -webkit-backdrop-filter: blur(4px);
    borderRadius: "10px",
  };

  const unixTime = (sec) => {
    const date = new Date(sec * 1000);
    const timestr = date.toLocaleTimeString(sec);
    return timestr;
  };

  useEffect(() => {
    const dailyForecast = props.dailyWeather;

    setForecast(props?.dailyWeather);

    // dailyWeatherData().then(({ data }) =>
    //   setForecast([...data.list.splice(0, 8)])
    // );
  }, []);

  // const divStyles = {
  //   width: "40%",
  //   border: "1px solid black",
  // };
  return (
    <SoftBox height={"50%"}>
      {props.dailyWeather.list &&
        props.dailyWeather.list.splice(0, 8).map((element, index) => (
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
