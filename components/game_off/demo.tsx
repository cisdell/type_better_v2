import React from "react";

export default function Demo({
  setDemoOn,
  setCountdownOn,
}: {
  setDemoOn: Function;
  setCountdownOn: Function;
}) {
  return (
    <div className="absolute inset-0 flex flex-col z-10 justify-center items-center bg-slate-600 ml-[20%] mr-[20%] mt-[10%] mb-[10%] rounded-3xl z-10">
      <h1>demo</h1>
      {/* <video src="/images/demo_vide.mov">video sample</video> */}
      <source src="/images/demo_vide.mov" type="video/quicktime"></source>
      <button
        className="h-8 w-20 bg-blue-500 text-white rounded-lg"
        onClick={() => {
          setDemoOn(false);
          setCountdownOn(true);
        }}
      >
        Close
      </button>
    </div>
  );
}
