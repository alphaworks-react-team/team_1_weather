import styled from "styled-components";
import React from "react";
import Icons from "../Icons/Icons.js";
import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { GoLocation } from "react-icons/go";

const CurrentWeather = (props) => {
  const styles = {
    current: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "85%",
      height: "60%",
      borderRadius: "15px",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(4px)",
      webkitBbackdropFilter: "blur(4px)",
    },
    icons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "60px",
      border: "none",
    },
    location: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "10px",
      color: "rgb(51, 119, 255)",
      fontSize: "25px",
      fontWeight: "800",
    },
    temp: {
      display: "flex",
      color: "rgb(51, 119, 255)",
      justifyContent: "center",
      fontSize: "20px",
      fontWeight: "700",
    },
    description: {
      display: "flex",
      color: "rgb(51, 119, 255)",
      justifyContent: "center",
      fontWeight: "700",
    },
    wind: {
      display: "flex",
      color: "rgb(51, 119, 255)",
      justifyContent: "space-around",
      fontWeight: "700",
    },
    hum: {
      display: "flex",
      color: "rgb(51, 119, 255)",
      justifyContent: "space-around",
      fontWeight: "700",
    },
  };
  return (
    <div style={styles.current}>
      <div style={styles.location}>
        <GoLocation /> {props.location}
      </div>
      <div style={styles.icons}>
        <Icons description={props.description} />
      </div>
      <div style={styles.temp}>{props.temp}°</div>
      <div style={styles.description}>{props.description}</div>
      <div style={styles.wind}>
        <div>
          <RiWindyFill /> Wind
        </div>
        <div>{props.wind}</div>
      </div>
      <div style={styles.hum}>
        <div>
          <WiHumidity /> Humid
        </div>
        <div>{props.humidity}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
