"use client";

import { Button } from "@/components/Button";
import { StudySession } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import {IoIosArrowBack} from "react-icons/io"

import React, { useEffect, useState } from "react";
import SessionCard from "./Card";

export default function Page() {
  const [Posts, setPosts] = useState<StudySession[]>();

  const getPublicPosts = async () => {
    const result: any = await axios.get("/api/getPublicPosts");
    setPosts(result.data);
  };

  useEffect(() => {
    getPublicPosts();
  }, []);

  return (
    <div className="relative">
      <Link
        href={"/dashboard"}
        
        className="absolute top-2 left-5 btn btn-error flex gap-1"
          >
        <IoIosArrowBack className="text-lg"/>
        Dashboard
      </Link>

      <div className="border-5 mx-auto my-3 max-w-fit rounded-xl border border-primary px-5 py-4 text-6xl font-thin">
        Community
      </div>
      <div className="m-5 grid w-full grid-cols-3 gap-2">
        {Posts?.map((post: StudySession) => {
          console.log(Posts);
          return (
            <div key={post.id}>
              <SessionCard props={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
