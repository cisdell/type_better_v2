import React from "react";

export default function NavBar() {
  return (
    <nav className="h-[3rem] w-auto bg-gray-400 flex justify-end justify-around text-xl">
      <span className="ml-28">Welcome USERNsdfsdfsdfAME</span>
      <a className="mr-7" href="">
        Home
      </a>
      <a className="mr-7" href="">
        Login
      </a>
      <a className="mr-7" href="">
        Leaderboard
      </a>
      <a className="mr-7" href="">
        Add Request
      </a>
      <a
        className="mr-7"
        href="https://hireandrewcho.vercel.app/"
        target="_blank"
      >
        About Me
      </a>
    </nav>
  );
}
