


import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


import React from 'react'

export default async function Layout({ children }: any) {
    const session = await getServerSession(authOptions)
    if(!session) redirect("/")
  return (
      <div>{children}</div>
  )
}
