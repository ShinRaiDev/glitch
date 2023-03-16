"use client"
import React, { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";

function Timer() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [TimerStatus, setTimerStatus]=useState<boolean>(false)
  const TimeRef = useRef<any>()
  const handleStart = () => {
    setTimerStatus(true)
    TimeRef.current= setInterval(() => {
        setSeconds((seconds) => {
          const newSeconds = seconds + 1;
          if (newSeconds === 60) {
            setMinutes((minutes) => {
              const newMinutes = minutes + 1;
              if (newMinutes === 60) {
                setHours((hours) => hours + 1);
                return 0;
              }
              return newMinutes;
            });
            return 0;
          }
          return newSeconds;
        });
      }, 1000);
    
  }


  const handleEnd = () => {
    clearInterval(TimeRef.current);
    setTimerStatus(false)
    
  }

  return (
    <div className="">
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
          {/* @ts-ignore*/}
            <span style={{ "--value": hours }}>{hours}</span>
          </span>
          hours
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
          {/* @ts-ignore*/}
            <span style={{ "--value": minutes }}>{minutes}</span>
          </span>
          min
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <span className="countdown font-mono text-5xl">
          {/* @ts-ignore*/}
            <span style={{ "--value": seconds }}>{seconds}</span>
          </span>
          sec
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button onClick={TimerStatus?handleEnd:handleStart} className={`btn ${TimerStatus?"btn-error":"btn-primary"}`}>
          {TimerStatus?"pause":seconds>0||minutes>0||hours>0 ? "resume":"start" }
        </button>
        {
          (seconds > 0 || minutes > 0 || hours > 0) &&
          <button onClick={()=>signIn()} className="btn btn-secondary ml-4">
              finish
          </button>
        } 
      </div>
    </div>
  );
}

export default Timer;
