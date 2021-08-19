import styled from 'styled-components'
import React from 'react'
// import Icons from "../Icons/Icons"


const Current = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width:95%;
    height: 50%;
    border: 2px solid red;
    background-color: smokey-white;
    filter: blur(2px);
`;

const CurrentWeather = (props) => {
    const styles = {
        width: "80px",
        height: "80px"
    }
    return (
        <Current>
            <div>
                {props.location}
            </div>
           <div>   
                {/* <Icons style={styles} type = "sunny"/> */}
            </div> 
            <div>
                {props.date}
            </div>
            <div>
                {props.temp}
            </div>
            <div>
                {props.description}
            </div>
            <div>
                {props.wind}
            </div>
            <div>
                {props.humidity}
            </div>
        </Current>
    )
}


export default CurrentWeather
