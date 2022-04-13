import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";

interface SearchBarProps {
  callback : Function
}

const SearchBar = ({ callback  }: SearchBarProps) => {
  const [state, setState] = useState("");
  //const timeOut = useRef(null);
  //implement debounce 

  const doSearch = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target ;
    setState(value);
    callback(value);
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchBarContent>
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input
            type="text"
            placeholder="search e.g. Captain Marvel"
            onChange={doSearch}
            value={state}
          />
        </StyledSearchBarContent>
      </StyledSearchBar>
    </>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
