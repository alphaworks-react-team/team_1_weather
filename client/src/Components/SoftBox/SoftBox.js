import { useState, useEffect } from "react";
import styled from "styled-components";
import { dailyWeatherData } from "../../utils/utils";

const SoftBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: ${(props) => (props.height ? props.height : null)};
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export default SoftBox;
