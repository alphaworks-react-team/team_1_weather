import React from 'react'
import windy from '../../assets/23.png'
import sunny from '../../assets/32.png'
import hot from '../../assets/36.png'
import cloudyDay from '../../assets/28.png'
import partlyCloudyDay from '../../assets/30.png'
import lightRain from '../../assets/9.png'
import lightSnow from '../../assets/13.png'
import lightHaze from '../../assets/20.png'
import dayHeavyRain from '../../assets/39.png'
import dayTStorm from '../../assets/37.png'
import daySnow from '../../assets/41.png'
import clearNight from '../../assets/31.png'
import cloudyNight from '../../assets/27.png'
import partlyCloudyNight from '../../assets/29.png'
import nightTStorm from '../../assets/47.png'
import nightHeavyRain from '../../assets/45.png'
import nightSnow from '../../assets/46.png'
import nightHaze from '../../assets/22.png'



const Icons = (props) => {
    const returnIcon = () => {
        switch (props.description) {
            case "sunny":
                return sunny
            case "thunder":
                return thunderstorm
            default:
                break;
        }
    }
    return (
        <img style = {props.style} src={returnIcon()} alt="broken image"/>
    )
}

export default Icons
