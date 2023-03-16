"use client" //remove this
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { signIn, useSession } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  return (
    <main>
      {session?.user?.name}
      <button className='btn' onClick={()=>signIn()}>
        nigga this nigga that nigga cum nigga back
      </button>
    </main>
  )
}
