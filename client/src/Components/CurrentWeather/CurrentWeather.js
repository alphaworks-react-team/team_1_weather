import styled from 'styled-components'
import React from 'react'
import Icons from "../Icons/Icons"



const CurrentWeather = (props) => {
    const styles = {
        width: "30px",
        height: "30px"
    }
    return (
        <Current>   
            <Icons style={styles} type = "sunny"/>
        </Current>
    )
}


 

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


export default CurrentWeather
