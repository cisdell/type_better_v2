import React from "react";

export default function NavBar() {
  return (
    // <nav className="h-[3rem] w-auto bg-gray-400 flex justify-end justify-around text-xl">
    <nav className="h-14 w-auto bg-black flex items-center">
      <div className="w-[50%]">
        <span className="w-[30%] ml-10 text-white">
          Welcome to TypeBetter CoolUser!
        </span>
      </div>

      <div className="w-[50%] flex justify-end gap-4 pr-5">
        <a
          className="h-10 w-28 text-center border border-yellow-600 rounded-lg pt-2 text-black bg-yellow-600 hover:cursor-pointer"
          href=""
        >
          Home
        </a>
        <a className="h-10 w-28 text-center border border-yellow-600 rounded-lg pt-2 text-black bg-yellow-600 hover:cursor-pointer">
          Login
        </a>
        <a className="h-10 w-28 text-center border border-yellow-600 rounded-lg pt-2 text-black bg-yellow-600 hover:cursor-pointer">
          Leaderboard
        </a>
        <a className="h-10 w-28 text-center border border-yellow-600 rounded-lg pt-2 text-black bg-yellow-600 hover:cursor-pointer">
          Add Request
        </a>
        <a
          className="h-10 w-28 text-center border border-yellow-600 rounded-lg pt-2 text-black bg-yellow-600 hover:cursor-pointer"
          href="https://hireandrewcho.vercel.app/"
          target="_blank"
        >
          About Me
        </a>
      </div>
    </nav>
  );
}
