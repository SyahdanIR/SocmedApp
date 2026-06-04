import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import ThreadCard from "@/components/ThreadCard";
import { dummyThreads } from "@/data/dummyThread";

function Home() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <Profile />
      <div className="flex-1 flex flex-col items-center">
        <h1 className="text-3xl font-bold py-4 text-orange-700">
          Welcome to AntiSocial
        </h1>
        <p className="text-lg text-orange-600">
          Connect with friends and share your moments with the world.
        </p>
        <Card className="bg-orange-200 text-stone-800 w-full mt-4">
          <div className="p-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              className="rounded-full w-10 h-10"
            />
          </div>
        </Card>
        {dummyThreads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
}
export default Home;
