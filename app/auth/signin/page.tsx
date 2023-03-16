"use server"
import { getProviders, getSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/Button'
import ProviderButton from "@/components/auth/ProviderButton"

async function page() {
    const providers = await getProviders()
    const session = await getSession()

    if(session?.user)redirect("/")

  return (
    <div className='min-h-screen w-screen flex flex-col justify-center items-center'>
          <div className="p-3 bg-slate-600 rounded-xl flex ">
            {Object.values(providers!).map((provider) => (
              <div className='m-5' key={provider?.name}>
                <ProviderButton provider={provider} />
              </div>
            ))}
          </div>
      </div>
  )
}

export default page