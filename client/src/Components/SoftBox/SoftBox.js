import { useState, useEffect } from "react";
import styled from "styled-components";
import { dailyWeatherData } from "../../utils/utils";

const SoftBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: ${(props) => (props.height ? props.height : null)};
  border-radius: 50px;
  background: #e0e0e0;
`;

export default SoftBox;
