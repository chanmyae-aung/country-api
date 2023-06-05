import React, { useState } from "react";
import { RiMoonLine } from "react-icons/ri";
import "../App.css"
import { StateContextCustom } from "../context/StateContext";

const Navbar = () => {
  const {mode, setMode} = StateContextCustom()
  return (
      <div className="py-5 border-b flex justify-between px-12 ">
      <h2 className="font-bold">Where in the world?</h2>
      <div onClick={() => setMode(!mode)} className="flex items-center gap-2 cursor-pointer">
        <RiMoonLine />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
