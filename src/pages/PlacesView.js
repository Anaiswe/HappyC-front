import axios from "axios";
import { useEffect, useState } from "react";
import MapAllPlaces from "../functions/MapAllPlaces";

const PlacesView = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:3000/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className="view-container">
        <div className="left">
          <div className="title">
            <h1>Places around me</h1>
            <input type="text" placeholder="Search" />
          </div>
          <div className="places-container">
            {data.map((data) => {
              return (
                <div className="info">
                  <img src={data.thumbnail} alt="places" className="pictures" />
                  <div className="description">
                    <p> {data.name}</p>
                    <p>{data.address}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <MapAllPlaces data={data} />
        </div>
      </section>
    </>
  );
};

export default PlacesView;
