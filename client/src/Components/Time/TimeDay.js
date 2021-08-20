import React from "react";
import styled from "styled-components";

const DateTimeContainer = styled.div`
  height: 15%;
  padding: 15px;
  display: flex;
  flex-flow: wrap column;
  justify-content: space-evenly;
`;

const TimeHeading = styled.h1`
  margin: 0px;
`;

const DateBody = styled.h3`
  margin: 0px;
`;

const TimeDay = ({ weather }) => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentTime = currentDate.toLocaleTimeString();
  const currentDay = currentDate.toLocaleString("en-US", options);
  const searchedWeather = weather ? weather : currentTime;
  const searchedTime = searchedWeather.dt;
  const convertTime = new Date(searchedTime * 1000);
  let hours = convertTime.getHours();
  let minutes = "0" + convertTime.getMinutes();
  let seconds = "0" + convertTime.getSeconds();
  const formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  // const formattedTime = convertTime.toLocaleString("JP");
  // console.log(weather);
  // console.log(formattedTime);

  return (
    <DateTimeContainer>
      <TimeHeading>{currentTime}</TimeHeading>
      <DateBody>{currentDay}</DateBody>
    </DateTimeContainer>
  );
};

export default TimeDay;
