import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  height: 40%;
  width: 100%;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  // background-color: grey;
`;

const HistoryCard = styled.div`
  padding: 5px;
  height: 40%;
  width: 100%;
  display: flex;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const HistoryCardHeader = styled.h2`
  margin: 0;
`;

const HistoryCardTemp = styled.h3`
  margin: 0;
`;

const HistoryIcon = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  height: auto;
`;

const HistoryDescription = styled.h6`
  margin: 0;
`;

const History = (props) => {
  const [searchedHistory, setSearchedHistory] = useState([]);

  useEffect(() => {
    setSearchedHistory(props.history);
    keepAt2();
  }, [props.history]);

  const keepAt2 = () => {
    const dataArray = [...searchedHistory];
    if (dataArray.length > 1) {
      console.log("popped", dataArray);
      dataArray.shift();
      setSearchedHistory(dataArray);
    }
  };

  const historyCards = () =>
    searchedHistory
      ? searchedHistory.map((city, index) => (
          <HistoryCard key={index}>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexFlow: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <HistoryCardHeader>
                {city.name}, {city.sys.country}
              </HistoryCardHeader>
              <HistoryCardTemp>{city.main.temp} °F</HistoryCardTemp>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexFlow: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HistoryIcon
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              />
              <HistoryDescription>
                {city.weather[0].description}
              </HistoryDescription>
            </div>
          </HistoryCard>
        ))
      : null;

  return <HistoryContainer>{historyCards()}</HistoryContainer>;
};

export default History;
