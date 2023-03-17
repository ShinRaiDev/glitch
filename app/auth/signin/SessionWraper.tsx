"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SessionWrapper({ children }: any) {
  const { data: session } = useSession();
  const router = useRouter();
  if (session?.user) router.replace("/Home");
  return <div>{children}</div>;
}
