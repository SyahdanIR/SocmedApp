import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useState, useEffect } from "react";
import ThreadCard from "@/components/ThreadCard";
import { getThreads } from "@/services/ThreadService";
import type { Thread } from "@/types/Thread";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

function Home() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const data = await getThreads();
      console.log(data.threads);
      setThreads(data.threads);
    };

    fetchThreads();
  }, []);

  return (
    <div className="flex gap-4">
      <Sidebar />
      <Profile />
      <div className="mx-80 px-7 flex-1 flex flex-col items-center">
        <h1 className="text-3xl font-bold py-4 text-orange-700">
          Welcome to AntiSocial
        </h1>
        <p className="text-lg text-orange-600">
          Connect with friends and share your moments with the world.
        </p>
        <InputGroup className="border-orange-200 hover:border-orange-300 rounded-lg p-2 mt-4">
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="Apa yang anda pikirkan?"
            className="text-orange-500"
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              variant="default"
              size="sm"
              className="ml-auto bg-orange-600 focus:bg-orange-700 text-white focus:outline-none"
            >
              Post
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        {threads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
}
export default Home;
