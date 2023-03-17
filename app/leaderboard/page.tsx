"use client"

import { User } from '@prisma/client'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [Leaders, setLeaders] = useState<User[]>()
  const [IsWin, setIsWin] = useState(false)
  const {data:session}=useSession()
  const getLeaders =async()=>{
    const results:any = await axios.get("/api/GetLeaders")
    setLeaders(results.data)
  }

  useEffect(() => {
    getLeaders()
  }, [])
  
  return (
    <div className="min-w-screen min-h-screen  w-full flex flex-col  items-center">
      <span className='text-5xl'>Leaderboard</span>
      <div className="overflow-x-auto w-11/12 m-5 drop-shadow-lg bg-primary rounded-xl border-4 border-primary ">
        <table className="table table-zebra w-full mx-1/2">
      {/* head */}
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>XP</th>
        </tr>
      </thead>
      <tbody>
        {Leaders?.map((Leader:User,index)=>{
          // if(Leader.name===session?.user?.name)setIsWin(true)
          return(
            <tr key={Leader.id}>
              <th>{index+1}</th>
              <th>{Leader.name}</th>
              <th>{Leader.xp}</th>
            </tr>
          )
        })}
      </tbody>
        </table>
      </div>
    </div>
  )
}
