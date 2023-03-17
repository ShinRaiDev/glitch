
import ShowUser from "./ShowUser";
import { useSession,getSession } from "next-auth/react";
import React from "react";

async function serverSideDash() {

  return (<>
    <div className="max-h-full max-w-full ">
      <div className="flex max-w-full justify-end">
        <ShowUser />
      </div>
      <div className="mr-52 ml-16">
        <div className="pl-10 text-6xl font-bold">Some inspirational heading</div>
        <div className="mr-48 mt-10 pl-10 pr-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          reiciendis vero qui incidunt numquam pariatur mollitia deleniti sint
          corrupti vel, odio ea quasi ut ullam exercitationem placeat, beatae
          fuga voluptates cum quos! Nostrum, suscipit ipsa iure minima soluta
          saepe illo.
        </div>
      </div>

      <div className="mx-14 text-2xl bg-slate-600 px-14 py-5 rounded-2xl flex justify-between mt-16">
        <div className="">
          total time
          {/* @ts-ignore*/}
          <div className="radial-progress text-primary ml-5" style={{"--value":70}}>70%</div>
        </div>       
        <div className="">
          longest session
          {/* @ts-ignore*/}
          <div className="radial-progress text-primary ml-5" style={{"--value":70}}>70%</div>
        </div> 
        <div className="">
          average efficiency
          {/* @ts-ignore*/}
          <div className="radial-progress text-primary ml-5" style={{"--value":70}}>70%</div>
        </div> 
      </div>
    </div></>
  );
}

export default serverSideDash;
