import React, { useEffect, useState } from "react";

export default function Countdown({ setCountdownOn, setPaused }: any) {
  const [countdown, setCountdown] = useState(5);
  setPaused(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        console.log("timer done");
        setCountdownOn(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="absolute z-20 bg-yellow-600 mb-[40%] rounded-lg shadow-md w-[20rem]">
      <h1 className="text-2xl text-center">Get Ready! It starts in:</h1>
      {/* <h2>{countdown}</h2> */}
      <h1 className="text-center text-3xl text-red-600 transition">
        {countdown}
      </h1>
    </div>
  );
}
