import React from "react";
import styled from "styled-components";

const SideBar = (props) => {
  return <Aside>{props.children}</Aside>;
};
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
`;
export default SideBar;
