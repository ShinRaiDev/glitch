 "use client"
import Timer from "@/components/Timer";
import { redirect, useRouter } from "next/navigation";
import { getSession, useSession , signOut} from "next-auth/react";
import { Button } from "@/components/Button";



export default  function Home() {
  const { data: session } = useSession()

  return (
    <>
      <main>
        <div className="flex min-h-screen w-screen flex-col items-center justify-center">
          <div className="mb-8 text-5xl ">
            <span>Welcome <span className="text-secondary hover:text-info">{session?.user?.name}</span> !</span>
          </div>
          <Timer />
        </div>
        <Button onclick={()=>signOut()}>signout</Button>
      </main>
    </>
  );
}
