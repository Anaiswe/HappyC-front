import { useEffect, useState } from "react";
import axios from "axios";
import Places from "../components/Places";

import Limit from "../functions/Limit";
import Pagination from "../functions/Pagination";
import HeroFilters from "../components/HeroFilters";
import SearchBar from "../functions/SearchBar";

import "../assets/styles/home.css";

const Home = ({ name, limit, setLimit, type, setType, handleType }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(1);
  const url = "http://localhost:3000/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}?name=${name}&type=${type}&limit=${limit}&skip=${skip}`
        );
        setData(response.data);
        setSkip(response.skip);
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

      <div className="hero-filters">
        <HeroFilters handleType={handleType} type={type} setType={setType} />
      </div>
      <Limit setLimit={setLimit} />
      <div className="places">
        {data.map((place) => {
          return <Places key={data.placeId} data={place} skip={setSkip} />;
        })}
      </div>
      <Pagination skip={skip} setSkip={setSkip} />
    </div>
  );
};

export default Home;
