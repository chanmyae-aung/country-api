import React from "react";
import { StateContextCustom } from "../context/StateContext";

const Search = () => {
  const {
    state: { countryLists, region }, mode,
    search,
    setSearch,
  } = StateContextCustom();
   const continent = countryLists.map(
    (item) =>
    !region.includes(item.region) && region.push(item.region)
  );
  console.log(continent);
  console.log(region);
  
  return (
    <div className="py-5 px-12 flex justify-between">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search for a country..."
        className={ mode ? "dark border px-4 py-2 rounded outline-none": "border px-4 py-2 rounded outline-none focus-within:border-black"}
      />
      <select className={mode ? "dark p-2 px-4 rounded outline-none cursor-pointer": " p-2 px-4 rounded bg-white outline-none cursor-pointer"}>
        <option>Filter by region</option>
        {region.map((item) => (
          <option onClick={(e) => console.log(e.target.value) }>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Search;
