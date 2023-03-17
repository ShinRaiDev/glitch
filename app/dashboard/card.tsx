"use client";

import { StudySession } from "@prisma/client";
import React from "react";
import { secondsToHms } from "@/lib/utils/utils";

export default function SessionCard({ props }: any) {
  const hms = secondsToHms(props.time);
  return (
    <div className="card w-96 bg-secondary text-base-100 shadow-xl">
      <div className="card-body m-3 px-3 py-2">
        <h2 className="card-title text-3xl font-bold">{props.title}</h2>
        <span className="text-xl ">
          {props.description}
        </span>
        <div className="card-actions m-3 flex flex-col items-end justify-end px-3 py-2 text-lg">
          <span>Efficiency: {props.efficiency}</span>
          <span>
            Time Spent: {hms[0]}:{hms[1]}:{hms[2]}:{hms[3]}
          </span>
        </div>
      </div>
    </div>
  );
}
