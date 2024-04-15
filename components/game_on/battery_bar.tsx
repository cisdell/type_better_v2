import React from "react";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa";

export default function BatteryBar() {
  return (
    <div className="justify-end text-yellow-600 shadow-2xl">
      {/* <PiPersonArmsSpreadFill size={50} /> */}
      <FaKeyboard size={80} />
    </div>
  );
}
