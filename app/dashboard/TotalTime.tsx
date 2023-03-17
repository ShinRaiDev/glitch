"use client";
import React from "react";
import { BsInfinity } from "react-icons/bs"

function secondsToHms(time: any) {
  let t = time;
  var d = Math.floor(t/86400)
  var h = Math.floor((t % 86400) / 3600);
  var m = Math.floor(((t % 86400) % 3600) / 60);
  var s = Math.floor(((t % 86400) % 3600) % 60);

  var dDisplay = d > 0 ? d : "00";
  var hDisplay = h > 0 ? h : "00";
  var mDisplay = m > 0 ? m : "00";
  var sDisplay = s > 0 ? s : "00";
  let arr = [dDisplay,hDisplay, mDisplay, sDisplay];
  return arr;
}

export default function TotalTime({ time }: any) {
  const hms = secondsToHms(time);
  console.log(hms);
  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* @ts-ignore*/}
            {hms[0]<=99? <span style={{ "--value": hms[0] }}> </span>:<BsInfinity/>}
          </span>
          days
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* @ts-ignore*/}
            {hms[0]<=99? <span style={{ "--value": hms[1] }}> </span>:<BsInfinity/>}
          </span>
          hours
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* @ts-ignore*/}
            {hms[0]<=99? <span style={{ "--value": hms[2] }}> </span>:<BsInfinity/>}
          </span>
          min
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
            {/* @ts-ignore*/}
            {hms[0]<=99? <span style={{ "--value": hms[3] }}> </span>:<BsInfinity/>}
          </span>
          sec
        </div>
      </div>
    </>
  );
}
