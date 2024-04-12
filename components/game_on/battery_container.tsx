import React from "react";
import BatteryBar from "./battery_bar";
import { BatteryContainerProps } from "@/util/types";

export default function BatteryContainer({ life }: BatteryContainerProps) {
  return (
    <div className="absolute w-[4rem] h-[15rem] mt-[4rem] ml-[50%] flex flex-col justify-end transition-transform">
      {life.map((l, index) => (
        <BatteryBar key={index} />
      ))}
    </div>
  );
}
