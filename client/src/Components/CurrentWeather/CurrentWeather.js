import styled from 'styled-components'
import React from 'react'
import Icons from "../Icons/Icons"
import windy from '../../assets/23.png'
import { TiWeatherWindy } from 'react-icons/ti'


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
            backgroundColor: "rgb(152, 187, 255)"
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
            marginLeft: "5px"
        },
        temp: {
            display: "flex",
            justifyContent: "center"
        },
        description: {
            display: "flex",
            justifyContent: "center"
        }
    }
    return (
        <div style={styles.current}>
            <div style={styles.location}>
                {props.location}
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
            <div>
                <div>
                    <TiWeatherWindy />
                    <img style={{width: "30px", height: "30px"}}src={windy} />wind
                     {/* {props.wind} */}
                </div> 
            </div>
            <div>
                Hum: {props.humidity}
            </div>
        </div>
    )
}


export default CurrentWeather
