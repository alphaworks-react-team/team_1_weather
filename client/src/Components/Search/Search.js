import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  height: 40%;
  width: 85%;
  border: none;
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

      <SearchButton type="submit">
        <p style={styles}>X</p>
      </SearchButton>
    </SearchForm>
  );
};

export default Search;
