<<<<<<< HEAD
import styled from "styled-components";
import React from "react";
import Icons from "../Icons/Icons";
import windy from "../../assets/23.png";
import { TiWeatherWindy } from "react-icons/ti";

const CurrentWeather = (props) => {
  const styles = {
    current: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      width: "85%",
      height: "50%",
      borderRadius: "15px",
      border: "2px solid rgb(101, 153, 254)",
      backgroundColor: "rgb(152, 187, 255)",
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
      marginLeft: "5px",
    },
    temp: {
      display: "flex",
      justifyContent: "center",
    },
    description: {
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.current}>
      <div style={styles.location}>{props.location}</div>
      <div style={styles.icons}>
        <Icons description={props.description} />
      </div>
      <div style={styles.temp}>{props.temp}°</div>
      <div style={styles.description}>{props.description}</div>
      <div>
        <div>
          <TiWeatherWindy />
          <img style={{ width: "30px", height: "30px" }} src={windy} />
          wind
          {/* {props.wind} */}
=======
import styled from 'styled-components'
import React from 'react'
import Icons from "../Icons/Icons.js"
import { RiWindyFill } from 'react-icons/ri'
import { WiHumidity } from 'react-icons/wi'
import { GoLocation } from 'react-icons/go'


const CurrentWeather = (props) => {
    const styles = {
        current: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "85%",
            height: "60%",
            borderRadius: "15px",
            border: "1px solid rgb(79,171,77)",
            backgroundColor: "rgba(101,223,82, .2)",
            boxShadow: "6px 6px 8px rgba(79,171,77, .6)",
            backdropFilter: "blur(8px)",
        },
        icons: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "60px",
            border: "none"
        },
        location: {
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "10px",
            color: "rgb(51, 119, 255)",
            fontSize: "25px",
            fontWeight: "800"
        },
        temp: {
            display: "flex",
            color: "rgb(51, 119, 255)",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "700"
        },
        description: {
            display: "flex",
            color: "rgb(51, 119, 255)",
            justifyContent: "center",
            fontWeight: "700"
        },
        wind: {
            display: "flex",
            color: "rgb(51, 119, 255)",
            justifyContent: "space-around",
            fontWeight: "700"
        },
        hum: {
            display: "flex",
            color: "rgb(51, 119, 255)",
            justifyContent: "space-around",
            fontWeight: "700"
        },
    }
    return (
        <div style={styles.current}>
            <div style={styles.location}>
            <GoLocation /> {props.location}
            </div>
           <div style={styles.icons}>   
                <Icons description={props.description}/>
            </div>
            <div style={styles.temp}>
                {props.temp}°
            </div>
            <div style={styles.description}>
                {props.description}
            </div>
            <div style={styles.wind}>
                <div>
                    <RiWindyFill /> Wind
                </div> 
                <div>
                    {props.wind}
                </div>
            </div>
            <div style={styles.hum}>
                <div>
                    <WiHumidity/> Humid
                </div>
                <div>
                    {props.humidity}
                </div>
            </div>
>>>>>>> d8f9d9f42c091a2936153fc547dece227f22b5ec
        </div>
      </div>
      <div>Hum: {props.humidity}</div>
    </div>
  );
};

export default CurrentWeather;
