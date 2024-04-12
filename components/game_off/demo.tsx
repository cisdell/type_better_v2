import React from "react";

export default function Demo({ setDemoOn }: { setDemoOn: Function }) {
  return (
    <>
      <h1>demo</h1>
      <div>video goes here</div>
      <button
        className="h-8 w-20 bg-blue-500 text-white rounded-lg"
        onClick={() => {
          setDemoOn(false);
        }}
      >
        Close
      </button>
    </>
  );
}
