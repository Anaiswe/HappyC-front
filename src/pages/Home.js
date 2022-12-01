import { useEffect, useState } from "react";
import axios from "axios";
import Places from "../components/Places";

import Limit from "../functions/Limit";

import Pagination from "../functions/Pagination";
import "../assets/styles/home.css";
import HeroFilters from "../components/HeroFilters";
import SearchBar from "../functions/SearchBar";

const Home = ({
  userId,
  name,
  handleSearch,
  limit,
  setLimit,
  skip,
  setSkip,
  type,
  setType,
  handleType,
  userToken,
}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // const [skip, setSkip] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/?name=${name}&type=${type}&limit=${limit}&skip=${skip}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, [type, name, limit, skip]);

  return loading ? (
    <div>is loading...</div>
  ) : (
    <div className="home">
      <SearchBar data={data} />
      <h2>Nos restaurants</h2>
      <div className="hero-filters">
        <HeroFilters handleType={handleType} type={type} setType={setType} />
      </div>
      <Limit setLimit={setLimit} />
      <div className="places">
        {data.map((place) => {
          return (
            <Places
              // key={data.placeId}
              data={place}
              // userToken={userToken}
              // favorites={favorites}
              // userId={userId}
            />
          );
        })}
      </div>
      <Pagination skip={setSkip} setSkip={setSkip} />
    </div>
  );
};

export default Home;
