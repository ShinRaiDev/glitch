"use client"; //remove this
import Image from "next/image";
import { Inter } from "next/font/google";

import { signIn, useSession } from "next-auth/react";
import Timer from "@/components/Timer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <main>
        
        {session?.user?.name}
        <button className="btn" onClick={() => signIn()}>
          nigga this nigga that nigga cum nigga back
        </button>
        <div className="flex min-h-screen w-screen items-center justify-center">
          <Timer></Timer>
        </div>
      </main>
    </>
  );
}
