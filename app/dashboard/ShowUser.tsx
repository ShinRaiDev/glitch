"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {BsFillTrophyFill} from "react-icons/bs"
import { IoIosLogOut } from "react-icons/io";

export default function ShowUser(props:any) {
  const {data : session} = useSession()
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} className=" px-3 py-2 text-secondary hover:text-info hover:bg-neutral rounded-xl m-3 flex item-center justify-center">
        <div className="font-extralight flex items-center justify-center mr-2"><BsFillTrophyFill className="m-1"/>{parseInt(props.xp)}</div>
        <div className="my-auto">{session?.user?.name}</div>
        <div className="h-10 w-10 ml-4 overflow-hidden rounded-full outline outline-1  ">
          {
            <Image
              src={session?.user?.image!}
              alt="Picture of the author"
              height={200}
              width={200}
            />
          }
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-secondary rounded-box w-52">
    
    <li><button className="text-lg text-base-100" onClick={()=>signOut()}><IoIosLogOut/>LogOut</button></li>
  </ul>
    </div>
  );
}