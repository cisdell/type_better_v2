import React from "react";

export default function Word({ word, row, col }) {
  return (
    <div
      className={`absolute grid-cols-subgrid row-start-${row} col-start-${col} lm-auto rm-auto justify-center`}
    >
      {word}
    </div>
  );
}
