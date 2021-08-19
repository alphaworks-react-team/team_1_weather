import React, { useState } from "react";
import styled from "styled-components";

const HistoryContainer = styled.div`
  height: 40%;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;

const HistoryCard = styled.div`
  height: 40%;
  border: 1px solid black;
`;

const History = () => {
  const [searchedHistory, setSearchedHistory] = useState([]);

  return (
    <HistoryContainer>
      <HistoryCard />
      <HistoryCard />
    </HistoryContainer>
  );
};

export default History;
