import React from "react";

export default function Demo({ setDemoOn, setCountdownOn }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDemoOn(false);
    setCountdownOn(true);
    console.log("clicked from demo modal");
  };
  return (
    <div className="absolute inset-0 flex flex-col z-10 justify-center items-center bg-yellow-600 ml-[20%] mr-[20%] mt-[5%] mb-[5%] rounded-3xl">
      <h1 className="text-2xl pb-6">
        Instructions: Type the words in the text box before they hit the red
        bar.{" "}
      </h1>
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
          className="w-[11rem] h-[2rem] mt-2 bg-white text-black rounded-lg"
          type="submit"
          autoFocus
        >
          GAME ON!
        </button>
      </form>
    </div>
  );
}
