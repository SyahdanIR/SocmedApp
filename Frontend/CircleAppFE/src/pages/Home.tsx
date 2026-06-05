import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useState, useEffect } from "react";
import ThreadCard from "@/components/ThreadCard";
import { getThreads, createThread } from "@/services/ThreadService";
import type { Thread } from "@/types/Thread";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

function Home() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchThreads = async () => {
      const data = await getThreads();
      console.log(data.threads);
      setThreads(data.threads);
    };

    fetchThreads();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("content:", content);
    await createThread(content, image);

    setContent("");
    setImage(null);
  };

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
        <form
          onSubmit={handleSubmit}
          className="w-full"
          encType="multipart/form-data"
        >
          <InputGroup className="border-orange-200 hover:border-orange-300 rounded-lg p-2 mt-4 items-center flex flex-col">
            <InputGroupTextarea
              id="content"
              onChange={(e) => setContent(e.target.value)}
              placeholder="Apa yang anda pikirkan?"
              className="text-orange-500 my-auto"
            />
            <InputGroupAddon align="inline-end" className="flex items-between">
              <input
                type="file"
                name="image"
                accept="image/*"
                className="border-2 border-orange-500 rounded-lg p-2"
                onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              ></input>
              <Button
                type="submit"
                variant="default"
                className="ml-auto bg-orange-600 hover:bg-orange-700 text-white"
              >
                Post
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </form>

        {threads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
    </div>
  );
}
export default Home;
