import { useState } from "react";
import { useNavigate } from "react-router-dom";

//PKG
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const submitSearch = () => {
    const index = data.findIndex((item) => item.name === search);
    if (index !== -1) {
      navigate(`/places/${data.placeId}`);
    } else {
      alert("no results found");
    }
  };

  return (
    <>
      <h2>Check some places</h2>
      <form onSubmit={submitSearch} className="searchbar">
        <Autocomplete
          className="autocomplete"
          disablePortal
          id="combo-box-search"
          options={data}
          sx={{ width: 300 }}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          onChange={(event, value) => setSearch(value.name)}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Search for a place" />
          )}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.placeId}>
                {option.name}
              </li>
            );
          }}
        />
        <button type="submit" className="button">
          <FontAwesomeIcon icon={faSearch} className="button-search" />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
