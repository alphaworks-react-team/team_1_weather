import React from "react";
import styled from "styled-components";

const DateTimeContainer = styled.div`
  height: 15%;
  padding: 15px;
  display: flex;
  flex-flow: wrap column;
  justify-content: space-evenly;
`;

const DateHeading = styled.h1`
  margin: 0px;
`;

const TimeBody = styled.h3`
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
  console.log(weather);
  console.log(searchedTime);

  return (
    <DateTimeContainer>
      <DateHeading>{currentTime}</DateHeading>
      <TimeBody>{currentDay}</TimeBody>
    </DateTimeContainer>
  );
};

export default TimeDay;
