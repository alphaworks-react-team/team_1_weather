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
import overCast from "../../assets/26.png"
// import sunAndWhiteClouds from "../../assets/video/Sun&WhiteClouds.mp4"
import whiteCloudsMoveBlockSun from "../../assets/video/WhiteCloudsMoving&BlockSun.mp4"


const Icons = (props) => {
  const returnIcon = () => {
    switch (props.description) {
      case "clear sky" && "sunny":
        return sunny;
      case "thunderstorm" && "thunderstorm with heavy rain" :
        return dayTStorm;
      case "wind >== 8":
        return windy;
      case "sunny" && "hot":
        return hot;
      case "overcast clouds":
        return whiteCloudsMoveBlockSun;
      case ("broken clouds" || "few clouds" && "scattered clouds"):
        return partlyCloudyNight;
      case "light rain" && "moderate rain":
        return lightRain;
      case "light snow" && "moderate snow":
        return lightSnow;
      case "smoke":
        return lightHaze;
      case "heavy rain":
        return dayHeavyRain;
      case "sunny" && "snow":
        return daySnow;
      case "clear sky" && "night":
        return clearNight;
      case "cloudy" && "night":
        return cloudyNight;
      case "partly cloudly" || ("broken clouds" && "night"):
        return partlyCloudyNight;
      case "thunder storm" && "night":
        return nightTStorm;
      case "heavy rain" && "night":
        return nightHeavyRain;
      case "snow" && "snow":
        return nightSnow;
      case "haze" || ("hazy" && "night"):
        return nightHaze;
      default: 
        return  sunny;
    }
  };
  return <video style={styles} autoPlay unMuted src={returnIcon()} loop alt="broken image" />;
};

const styles = 
{
 boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
 backdropFilter: "blur(4px)",
 webkitBbackdropFilter: "blur(4px)",
}

export default Icons;
