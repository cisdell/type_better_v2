"use client";
import React from "react";

export default function GridPlaceholder({
  wordsOnScreen,
  row,
  col,
  setWordsOnScreen,
}) {
  console.log(wordsOnScreen);
  return (
    <div className="col-span-0.5 bg-gray-200">
      {wordsOnScreen.map((item, index) => {
        if (item.row === row && item.col === col) {
          return <div key={index}>{item.word}</div>;
        } else {
          return <div className="bg-slate-300">{<br />}</div>;
        }
      })}
    </div>
  );
}
