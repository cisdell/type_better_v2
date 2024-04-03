"use client";

import GamingGrid from "./game_on/gaming_board";

//libs

//components

export default function GamingBody() {
  return (
    <div className="h-[68rem] bg-gray-600 flex">
      <GamingGrid />
    </div>
  );
}
