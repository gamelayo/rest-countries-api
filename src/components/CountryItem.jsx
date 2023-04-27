import React from "react";
import { Link } from "react-router-dom";
const CountryItem = ({ country }) => {
  return (
    <div className="m-10 bg-primary">
      <Link to={`/country/${country.name.common}`}>
        <div>
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="w-full h-[100%] object-cover"
          />
        </div>
      </Link>
      <div className="pl-7 pb-12">
        <h2 className="py-4">{country.name.common}</h2>
        <p className="pb-1">Population: {country.population} </p>
        <p className="pb-1">Region: {country.region}</p>
        <p className="pb-1">Capital: {country.capital[0]}</p>
      </div>
    </div>
  );
};

export default CountryItem;
