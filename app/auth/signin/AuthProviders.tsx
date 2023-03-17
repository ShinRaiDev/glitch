import { getProviders, getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import ProviderButton from "./ProviderButton";

export const revalidate = 1;
export default async function AuthProviders() {
  const providers = await getProviders();
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="flex rounded-xl bg-slate-600 p-3 ">
        {Object.values(providers!).map((provider) => (
          <div className="m-5" key={provider?.name}>
            <ProviderButton provider={provider} />
          </div>
        ))}
      </div>
    </div>
  );
}
