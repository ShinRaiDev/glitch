"use client"

import { Button } from '@/components/Button'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function SignInButton() {
  return (
    <Button className='btn btn-primary' onclick={()=>signIn()}>Sign in</Button>
  )
}
