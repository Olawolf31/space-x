import React from "react";
import { useState } from "react";

const SearchForm = ({ setLaunchId }) => {
  const [searchValue, setSearchValue] = useState("");

  //handle search when form is submitted
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
        <button>Submit </button>
      </form>
    </div>
  );
};

export default SearchForm;
