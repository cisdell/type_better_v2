import React from "react";

export default function Demo({ setDemoOn, setCountdownOn }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDemoOn(false);
    setCountdownOn(true);
  };
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-600 ml-[20%] mr-[20%] mt-[10%] mb-[10%] rounded-3xl z-10">
      <h1></h1>
      <video
        width="640"
        height="480"
        autoPlay
        muted
        loop
        controls
        className="rounded-lg"
      >
        <source src="/images/demo_video.mp4" type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit}>
        <button
          className="w-[11rem] h-[2rem] mt-2 bg-yellow-600 text-black rounded-lg"
          type="submit"
          autoFocus
        >
          GAME ON!
        </button>
      </form>
    </div>
  );
}
