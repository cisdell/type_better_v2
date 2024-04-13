import React from "react";
import { PiPersonArmsSpreadFill } from "react-icons/pi";

export default function BatteryBar() {
  return (
    <div className="justify-end text-red-600">
      <PiPersonArmsSpreadFill size={50} />
    </div>
  );
}
