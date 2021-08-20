import React from "react";
import windy from "../../assets/23.png";
import sunny from "../../assets/32.png";
import hot from "../../assets/36.png";
import cloudyDay from "../../assets/28.png";
import partlyCloudyDay from "../../assets/30.png";
import lightRain from "../../assets/9.png";
import lightSnow from "../../assets/13.png";
import lightHaze from "../../assets/20.png";
import dayHeavyRain from "../../assets/39.png";
import dayTStorm from "../../assets/37.png";
import daySnow from "../../assets/41.png";
import clearNight from "../../assets/31.png";
import cloudyNight from "../../assets/27.png";
import partlyCloudyNight from "../../assets/29.png";
import nightTStorm from "../../assets/47.png";
import nightHeavyRain from "../../assets/45.png";
import nightSnow from "../../assets/46.png";
import nightHaze from "../../assets/22.png";

const Icons = (props) => {
    const returnIcon = () => {
        switch (props.description) {
            case "clear sky" || "sunny":
                return sunny
            case "thunder":
                return dayTStorm
            case "wind >== 8":
                return windy
            case "sunny" || "hot":
                return hot
            case "overcast clouds":
                return cloudyDay
            case "broken clouds" || "few clouds":
                return partlyCloudyDay
            case "light rain" || "moderate rain":
                return lightRain
            case "light snow" || "moderate snow":
                return lightSnow
            case "haze" || "hazey":
                return lightHaze
            case "heavy rain":
                return dayHeavyRain
            case "sunny" && "snow":
                return daySnow
            case "clear sky" && "night":
                return clearNight
            case "cloudy" && "night":
                return cloudyNight
            case "partly cloudly" || "broken clouds" && "night":
                return partlyCloudyNight
            case "thunder storm" && "night":
                return nightTStorm
            case "heavy rain" && "night":
                return nightHeavyRain
            case "snow" && "snow":
                return nightSnow
            case "haze" || "hazey" && "night":
                return nightHaze
        }
    }
  };

  return <img src={returnIcon()} alt="broken image" />;
};

export default Icons;
