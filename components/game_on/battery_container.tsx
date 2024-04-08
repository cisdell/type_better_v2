import React from "react";
import BatteryBar from "./battery_bar";
import { BatteryContainerProps } from "@/util/types";

export default function BatteryContainer({ life }: BatteryContainerProps) {
  return (
    <div className="absolute border-4 border-black rounded-lg w-[15rem] h-[8rem] -mt-96 ml-[80%] flex">
      {life.map((l, index) => (
        <BatteryBar key={index} />
      ))}
    </div>
  );
}
