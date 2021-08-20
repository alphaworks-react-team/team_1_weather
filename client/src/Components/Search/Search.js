import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  height: 40%;
  width: 85%;
  border: none;
  background: none;
  // display: none;
`;

const SearchButton = styled.button`
  height: auto;
  width: auto;
  border-radius: 50%;
  text-decoration: none;
  padding:0
  border: none;
  background-color: blue;
`;

const SearchForm = styled.form`
  height: 10%;
  width: ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Search = (props) => {
  const styles = {
    margin: "0",
    fontSize: "10px",
  };

  const [value, setValue] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <SearchForm onSubmit={(e) => props.SearchSubmit(e, value)}>
      <SearchInput
        placeholder="Search by city name"
        onChange={onChange}
        type="text"
      />

      {/* <SearchButton type="submit">
        <p style={styles}>X</p>
      </SearchButton> */}
    </SearchForm>
  );
};

export default Search;
