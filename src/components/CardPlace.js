import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MapLeafLet from "../functions/MapLeafLet";

import "../assets/styles/cardPlace.css";

const CardPlace = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { placeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/places/:${placeId}`
        );
        console.log(response.data);
        setData(response.data);

        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [placeId]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <div className="top-left">
        <h1>{data.name}</h1>
        <p>{data.type}</p>
      </div>
      <div className="content">
        <div className="block">
          <h1>CONTACT</h1>
          <p>{data.phone}</p>
          <h1>FIND</h1>
          <p>{data.address}</p>
        </div>
        <p className="content_description">{data.description}</p>

        <div className="pictures">
          {data.pictures.map((picture) => {
            return (
              <img
                className="picture_place"
                src={picture}
                alt="picture_place"
              />
            );
          })}
        </div>
        <div className="map">
          <MapLeafLet data={data} />
        </div>
      </div>
    </div>
  );
};

export default CardPlace;
