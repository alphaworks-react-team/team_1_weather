import React from "react";
import styled from "styled-components";
const Body = (props) => {
  return <MainBody>{props.children}</MainBody>;
};
const MainBody = styled.div`
  width: 60%;
  height: 100%;
`;

export default Body;
