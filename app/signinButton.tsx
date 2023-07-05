"use client";

import { Button } from "@/components/Button";
import { signIn } from "next-auth/react";
import { redirect,useRouter } from "next/navigation";

import React from "react";

export default function SignInButton() {

  return (
    <Button className="btn-primary btn" onclick={() =>signIn()}>
      Sign in
    </Button>
  );
}
