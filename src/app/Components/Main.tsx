import React from "react";
import NavBar from "./NavBar";
import GameBox from "./GameBox";
export default function Home() {

  return (
    <div className="flex flex-col items-center md:p-5 p-2 h-screen w-screen text-center">
      <NavBar />
      <div className="w-full h-full flex justify-center items-center">
        <GameBox />
      </div>
    </div>
  );
}
