"use client";
import { Button } from "@/components/Button";
import { signIn } from "next-auth/react";
import React, { useEffect } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function ProviderButton({ provider }: any) {
  let redirectUrl = "https://llama-time.vercel.app/";

useEffect(() => {
  const url = new URL(location.href);
  redirectUrl = url.searchParams.get("callbackUrl")!;
});
  if (provider.name === "GitHub") {
    return (
      <Button
        className="bg-my-neutral text-white hover:bg-my-base-100"
        onclick={() => signIn(provider.id, {
          callbackUrl:redirectUrl
        })}
      >
        <FaGithub className="mr-3 text-xl text-orange-400" /> Sign in with{" "}
        {provider.name}
      </Button>
    );
  } else {
    return (
      <Button
        className="bg-my-secondary text-white hover:bg-my-info"
        onclick={() => signIn(provider.id, {
          callbackUrl:redirectUrl
        })}
      >
        <FaDiscord className="mr-3 text-xl" /> Sign in with {provider.name}
      </Button>
    );
  }
}
