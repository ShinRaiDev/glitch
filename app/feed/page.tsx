"use client"

import { StudySession } from '@prisma/client'
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import SessionCard from './Card'


export default function Page() {
    const [Posts, setPosts] = useState<StudySession[]>()
   
    
    const getPublicPosts=async()=>{
        const result:any = await axios.get("/api/getPublicPosts")
        setPosts(result.data)
    }

    useEffect(() => {
      
    getPublicPosts()
    
    }, [])
    

  return (
    <div className='grid grid-cols-3 gap-2 w-full m-5'>
        {
            Posts?.map((post:StudySession)=>{
                console.log(Posts);
                return(<div key={post.id}>
                    <SessionCard props={post}/>
                    
                </div>)
            })
        }
    </div>
  )
}
