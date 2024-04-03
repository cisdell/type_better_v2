import React from "react";
import GridPlaceholder from "./grid_placeholder";
import { grid_pos } from "@/lib/data";

export default function GameBoard() {
  return (
    <div className="w-[90rem] h-[50rem] border-solid m-auto border-white justify-center align-middle bg-blue-800 flex flex-col">
      <h1>Instructions</h1>
      <div className="grid grid-cols-1 gap-2">
        {grid_pos.map(({ row, col }, index) => (
          <GridPlaceholder row={row} col={col} key={index} />
        ))}
      </div>
    </div>
  );
}
