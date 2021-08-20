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
            height: "50%",
            borderRadius: "15px",
            border: "3px solid rgb(179, 204, 255)",
            backgroundColor: "rgba(152, 187, 255, .4)",
            boxShadow: "8px 8px 12px rgba(101, 153, 254, .6), -8px -8px -12px 0 rgb(152, 187, 255)",
            background: "blur(12px)"
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
            justifyContent: "center"
        },
        description: {
            display: "flex",
            color: "rgb(51, 119, 255)",
            justifyContent: "center"
        },
        wind: {
            display: "flex",
            color: "rgb(51, 119, 255)",
            justifyContent: "space-around"
        },
        hum: {
            display: "flex",
            color: "rgb(51, 119, 255)",
            justifyContent: "space-around"
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
        </div>
    )
}


export default CurrentWeather
