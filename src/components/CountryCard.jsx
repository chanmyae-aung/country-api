import React from "react";
import { StateContextCustom } from "../context/StateContext";
import { Link } from "react-router-dom";
// import '../App.css'

const CountryCard = (props) => {
  const { idd, name, flags, capital, region, population } = props;
  const {dispatch, mode } = StateContextCustom();

  return (
    <Link to={`/detail/${name.common}`}>
      <div
        onClick={() => dispatch({ type: "GET_COUNTRIES", payload: props })}
        className={mode ? "card card-compact w-60 bg-base-100 shadow-xl rounded-md overflow-hidden text-white":" card-compact text-gray-500 w-60 bg-base-100 shadow-xl rounded-md overflow-hidden"}
      >
        <figure>
          <img
            className="w-full h-32 object-cover "
            src={flags.svg}
          />
        </figure>
        <div className="card-body p-5 pt-auto">
          <h2 className="card-title truncate font-bold mb-2">{name.common}</h2>
          <p className="">Population: {population}</p>
          <p className="">Region: {region}</p>
          <p className=" truncate">Capital: {capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
