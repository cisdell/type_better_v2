import React, { useEffect, useState } from "react";

export default function Countdown({ setCountdownOn, setPaused }: any) {
  const [countdown, setCountdown] = useState(4);
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
    <div className="z-20 border border-solid bg-red-800">
      <h1>Get Ready! It starts in</h1>
      <h2>{countdown}</h2>
    </div>
  );
}
