import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  onHandleFilter,
  searchHistory,
}) => {
  return (
    <div className="search">
      <div className="box">
        <form name="search" onSubmit={onHandleFilter}>
          {/* <form name="search" onSubmit={(e)=>onHandleFilter()}> */}
          <input
            type="text"
            name="txt"
            // onMouseOut="this.value = ''; this.blur();"
            className="input"
            placeholder="enter your search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <SearchIcon className="s-icon" />
        </form>
      </div>
      {searchTerm.length && searchHistory.length !== 0 && (
        <div className="searchResult">
          {searchHistory.map((history, i) => (
            <li style={{ listStyle: "none" }} key={i}>
              {history}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
{
  /* <i className="fas fa-search"></i>
      <a href="https://www.youtube.com/c/ShortCode" target="_blank">
        <YouTubeIcon id="ytb" />
        <i className="fab fa-youtube"> </i>
      </a> */
}

export default SearchBar;
