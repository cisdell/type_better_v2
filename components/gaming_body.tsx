"use client";

import GamingGrid from "./game_on/gaming_board";

//libs

//components

export default function GamingBody() {
  return (
    <div className="h-[68rem] bg-gray-600 flex bg-[url('/images/keyboard-background.jpg')] bg-cover flex items-center justify-center relative">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="absolute w-[90rem] h-[50rem] bg-gray-600 opacity-60 rounded-full blur-xl -z-1"></div>
      <GamingGrid />
    </div>
  );
}
