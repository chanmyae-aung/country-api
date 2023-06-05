import React from "react";
// import DetailCard from './DetailCard'
import { StateContextCustom } from "../context/StateContext";
// import DetailCard from "./DetailCard";
// import { TbArrowLeft } from "react-icons/tb";
// import { Link } from "react-router-dom";

const DetailPage = () => {
  // const {
  //   state: { countryLists },
  // } = StateContextCustom();
  // console.log(countryLists);
  return (
    <div className="px-12 h-screen"> DetailPage
      {/* <Link to={"/"}>
        <button className="flex items-center gap-2 p-1 px-6 my-16 rounded border ">
          <TbArrowLeft />
          back
        </button>
      </Link>
      <DetailCard key={countryLists.population} {...countryLists} /> */}
      {/* <h1>{countryLists.name.common}</h1> */}
    </div>
  );
};

export default DetailPage;
