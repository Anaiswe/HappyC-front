import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Places = ({ data }) => {
  const [isLoading] = useState(false);
  const navigate = useNavigate();

  return isLoading ? (
    <div>is loading...</div>
  ) : (
    <>
      <div className="place">
        <img className="place_img" src={data.thumbnail} alt="place" />

        <div className="place_description">
          <div className="place_title">
            <div>
              <h1>{data.name}</h1>
            </div>
          </div>
          <button
            onClick={() => {
              navigate(`/places/${data.placeId}`);
            }}
            className="button"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </>
  );
};
export default Places;
