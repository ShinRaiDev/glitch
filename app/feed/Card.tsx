"use client";

import { StudySession, User } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { calculateXP } from "@/lib/utils/utils";
import { secondsToHms } from "@/lib/utils/utils";

export default function SessionCard({ props }: any) {
  const [user,setUser]=useState<User>()

  const getUser=async()=>{
    const result:any=await axios.post("/api/getUser",{
      email:props.userEmail
    })
    setUser(result.data)
   
    
  }

  useEffect(() => {
    
    getUser()
  
    
  }, [])
  

  const hms = secondsToHms(props.time);
  return (
    <div className="card w-96 bg-primary text-base-100 shadow-xl">
      <div className="flex items-center my-2 mx-3 bg-secondary rounded-xl p-3">
        <div className="h-10 w-10 ml-4 overflow-hidden rounded-full outline outline-1 mr-3  ">
        {
          <Image
            src={user?.image!}
            alt="Picture of the author"
            height={200}
            width={200}
          />
        }
      </div>
      <div className="text-lg">{user?.name}</div>
      </div>
      <div className="card-body m-3 px-3 py-2">
        <h2 className="card-title text-3xl font-bold">{props.title}</h2>
        <span className="text-xl ">
          {props.description}
        </span>
        <div className="card-actions m-3 flex flex-col items-end justify-end px-3 py-2 text-lg">
          {/* @ts-ignore*/}
          XP Earned: {parseInt(calculateXP(props.time,props.efficiency))}
          {/* <span>Efficiency: {props.efficiency}</span> */}
          <span>
            Time Spent: 
            {hms[1]}:{hms[2]}:{hms[3]}
          </span> 
        </div>
      </div>
    </div>
  );
}