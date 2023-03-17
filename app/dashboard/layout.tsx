"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: any) {
    const { data: session } = useSession()
    const router = useRouter()
    console.log("bbbbbbb",session);
    
    if (!session?.user) {
        router.replace("/")
        return (<></>)
      }
  return (
      <div>{children}</div>
  )
}
