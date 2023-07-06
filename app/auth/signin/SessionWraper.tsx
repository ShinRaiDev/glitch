"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function SessionWrapper({ children }: any) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    
    
  
    if (session?.user) router.replace("/Home");
    
  }, [])
  
  return <div>{children}</div>;
}
