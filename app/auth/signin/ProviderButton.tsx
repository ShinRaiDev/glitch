"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { Button } from '../Button'
import { FaDiscord, FaGithub} from "react-icons/fa"

export default function ProviderButton({ provider }: any) {
  if(provider.name === 'GitHub'){
    return (
      <Button className='bg-my-neutral text-white hover:bg-my-base-100' onclick={()=>signIn(provider.id)}>
        <FaGithub className="mr-3 text-xl text-orange-400"/> Sign in with {provider.name}
      </Button>
    )
  }
  
  else{
    return (
      <Button className='bg-my-secondary text-white hover:bg-my-info' onclick={()=>signIn(provider.id)}>
        <FaDiscord className="mr-3 text-xl"/> Sign in with {provider.name} 
      </Button>
    )
  }
    
}
