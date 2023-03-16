
import { getProviders, getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
import ProviderButton from ""
export const revalidate = 1;
export default async function AuthProviders() {
    const providers = await getProviders()
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
