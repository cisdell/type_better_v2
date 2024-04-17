import React from "react";

export default function NavBar() {
  return (
    // <nav className="h-[3rem] w-auto bg-gray-400 flex justify-end justify-around text-xl">
    <nav className="h-[3rem] w-auto bg-gray-400 flex justify-between">
      <div>
        <span className="w-[20%] ml-8">Welcome USERNsdfsdfsdfAME</span>
      </div>
      <div className="r-0">
        <a className="" href="">
          Home
        </a>
        <a className="" href="">
          Login
        </a>
        <a className="" href="">
          Leaderboard
        </a>
        <a className="" href="">
          Add Request
        </a>
        <a
          className="mr-7"
          href="https://hireandrewcho.vercel.app/"
          target="_blank"
        >
          About Me
        </a>
      </div>
    </nav>
  );
}
