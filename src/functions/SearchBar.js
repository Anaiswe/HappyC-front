import { useState } from "react";
import { useNavigate } from "react-router-dom";

//PKG
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//need to fix bug GET /places/:undefined 200 1.744 ms - -
const SearchBar = ({ data, placeId }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const submitSearch = () => {
    const index = data.join((item) => item.placeId === search);
    if (index !== -1) {
      // navigate(`/places/${placeId}`);
      navigate("/view");
    } else {
      alert("no results found");
    }
  };

  return (
    <>
      <div className="banner">
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
            renderOption={(props, data) => {
              return (
                <li {...props} key={data.placeId}>
                  {data.name}
                </li>
              );
            }}
          />
          <button type="submit" className="button">
            <FontAwesomeIcon icon={faSearch} className="button-search" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
