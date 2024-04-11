import React from "react";
import BatteryBar from "./battery_bar";
import { BatteryContainerProps } from "@/util/types";

export default function BatteryContainer({ life }: BatteryContainerProps) {
  return (
    <div className="absolute border border-black w-[15rem] h-[4rem] -mt-96 ml-[80%] flex">
      {life.map((l, index) => (
        <BatteryBar key={index} />
      ))}
    </div>
  );
}
