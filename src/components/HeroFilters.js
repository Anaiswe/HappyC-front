import React from "react";
import Filters from "../functions/Filters";

const HeroFilters = ({ handleType, type, setType }) => {
  return (
    <>
      <div className="type_button">
        <span>Select by type</span>
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Vegan"
          name="vegan"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Vegetarian"
          name="vegetarian"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Veg-options"
          name="veg-options"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Delivery"
          name="Delivery"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Catering"
          name="Catering"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Veg Store"
          name="Veg Store"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Other"
          name="Other"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Health Store"
          name="Health Store"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Ice Cream"
          name="Ice Cream"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Juice Bar"
          name="Juice Bar"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Food Truck"
          name="Food Truck"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Market Vendor"
          name="Market Vendor"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Organization"
          name="Organization"
        />
        <Filters
          handleType={handleType}
          type={type}
          setType={setType}
          value="Bakery"
          name="Bakery"
        />
      </div>
    </>
  );
};

export default HeroFilters;
