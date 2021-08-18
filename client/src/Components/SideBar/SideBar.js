import React from "react";
import styled from "styled-components";

const SideBar = (props) => {
  return <Aside>{props.children}</Aside>;
};
const Aside = styled.div`
  width: 40%;
  height: 100%;
  border: 2px solid gray;
`;
export default SideBar;
