"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Layout({ children }: any) {
    const { data: session } = useSession()
    const router = useRouter()
    console.log("aaaaaaa",session);
    
    useEffect(() => {
      
    
        if (!session?.user) {
            router.replace("/")

          }
      
    }, [])
    

  return (
      <div>{children}</div>
  )
}
