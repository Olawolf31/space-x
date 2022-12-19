import React from "react";
import { useState } from "react";

const SearchForm = ({ setLaunchId }) => {
  const [searchValue, setSearchValue] = useState("");

  //searchHandler
  const submitSearch = (event) => {
    event.preventDefault();
   
      setLaunchId(searchValue);
      setSearchValue("");
    
  };

  return (
    <div className="search__form">
      <form onSubmit={submitSearch}>
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search by ID"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchForm;
