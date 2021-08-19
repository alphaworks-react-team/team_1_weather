import React from "react";
import styled from "styled-components";

const SideBar = (props) => {
  return <Aside>{props.children}</Aside>;
};
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100%;
  border: 2px solid gray;
`;
export default SideBar;
