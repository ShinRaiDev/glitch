"use client";
import ShowUser from "./ShowUser";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { StudySession } from "@prisma/client";
import { calceff, calctime, calculateXP } from "@/lib/utils/utils";
import SessionCard from "./card";
import { Button } from "@/components/Button";
import Link from "next/link";
import TotalTime from "./TotalTime";
import { BsFillClockFill } from "react-icons/bs";

function Page() {
  const { data: session } = useSession();
  const [Sessions, setSessions] = useState<StudySession[]>();
  const [longestSession, setLongestSession] = useState<any>();
  const getSessions = async () => {
    const res: any = await axios.post("/api/getSessions", {
      email: session?.user?.email,
    });
    setSessions(res?.data);
    
  };

  const setXP = async (xp:any) => {
    
    console.log(xp);
    console.log(session);
    
    await axios.post("/api/setXP", {
      email: session?.user?.email,
      xp: xp,
    });
  };

  useEffect(() => {
    getSessions();
    
  }, []);

  return (
    <>
      <div className="max-h-full max-w-full ">
        <div className="flex max-w-full justify-between">
          <div className="flex flex-grow gap-2 m-3">
            <Link href={"/Home"} className="btn btn-primary">New Timer</Link>
            <Link href={"/feed"} className="btn btn-error">Feed</Link>
            <Link href={"/leaderboard"} onClick={()=>{setXP(calculateXP(calctime(Sessions!), calceff(Sessions!)))}} className=" btn btn-secondary hover:bg-secondary">Leaderboard</Link>
          </div>
          <ShowUser xp={calculateXP(calctime(Sessions!), calceff(Sessions!))} />
        </div>
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex flex-grow flex-col mt-20">
            <div className="pl-10 text-4xl font-bold">
              Don't Watch The Clock ; Do What It Does , Keep Going!!
            </div>
            <div className="mr-48 mt-10 pl-10 pr-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              reiciendis vero qui incidunt numquam pariatur mollitia deleniti sint
              corrupti vel, odio ea quasi ut ullam exercitationem placeat, beatae
              fuga voluptates cum quos! Nostrum, suscipit ipsa iure minima soluta
              saepe illo.
            </div>
          </div>
          <div className="flex">
            <BsFillClockFill className="text-9xl"/>
            <div className="px-3 py-2 flex flex-col w-full justify-end items-end">
              <div>
                  <div className="text-3xl mr-32 mb-6">Total Time Spent :</div>
                    <TotalTime time={calctime(Sessions!)} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 ">
          <span className="text-5xl ml-7 font-light">Your Llama Sessions : </span>
          <div className="grid grid-cols-3 gap-2 w-full m-5">
            {Sessions?.map((session: StudySession) => {
              return (
                <div key={session.id}>
                  <SessionCard props={session} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
        }
export default Page;
