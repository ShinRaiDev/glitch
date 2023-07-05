
import React from 'react'
import SessionWrapper from './SessionWraper'
import AuthProviders from './AuthProviders'
import { getSession } from 'next-auth/react'

export const revalidate = 1;
async function page() {
  const session = await getSession()
  if (!session?.user)
  return (
    <>
      <SessionWrapper>
        {/* @ts-ignore*/}
        <AuthProviders/>
      </SessionWrapper>
    </>
    )
}

export default page