"use client";

import { useState } from "react";
import GameBoard from "./game_on/gaming_board";
import Sidebar from "./sidebar";

export default function GamingBody() {
  const [sidebarOn, setSidebarOn] = useState(false);
  return (
    <div className="h-[70rem] bg-gray-600 flex bg-[url('/images/keyboard-background.jpg')] bg-cover items-center justify-center relative">
      {sidebarOn && <Sidebar />}
      <div className="absolute w-[90rem] h-[50rem] bg-gray-800 opacity-80 rounded-full blur-3xl -z-1"></div>
      <GameBoard />
    </div>
  );
}
