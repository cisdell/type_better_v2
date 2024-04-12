import React from "react";
import { WordColType } from "@/util/types";

export default function GridPlaceholder({ row, col }: WordColType) {
  return (
    <div className="col-span-0.5 bg-gray-200 opacity-30 rounded-lg">
      <br />
    </div>
  );
}
