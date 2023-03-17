"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React,{useEffect} from 'react'

export default function ClientWrapper({ children }: any) {
    const { data: session } = useSession()
    console.log("aaaaaaa",session);
    const router = useRouter()
        
        if (!session?.user) {
            router.replace("/")
            return (<></>)
          }
    
      
    
     
  return (
      <div>{children}</div>
  )
}

