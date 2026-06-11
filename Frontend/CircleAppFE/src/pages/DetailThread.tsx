import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getThreadsById } from "@/services/ThreadService";
import type { Thread, Reply } from "@/types/Thread";
import { Heart, MessageSquare, MoveLeft } from "lucide-react";
import ReplyCard from "@/components/ReplyCard";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupTextarea,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { createReply } from "@/services/ReplyService";
import { socket } from "@/lib/socket";

export default function detailThread() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [thread, setThread] = useState<Thread>();
  const [reply, setReply] = useState<Reply[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getThreadsById(Number(id));
      console.log(data);
      setThread(data);
      //console.log(thread);
      setReply(data.replies);
      if (!thread) return <div>Loading...</div>;
    };
    fetchData();
  }, []);

  const handleReply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createReply(content, image, id);
    setContent("");
    setImage(null);
  };

  useEffect(() => {
    socket.on("new-reply", (reply) => {
      setReply((prev) => [reply, ...prev]);
    });
    return () => {
      socket.off("new-reply");
    };
  });

  return (
    <div>
      <Sidebar />
      <Profile />
      <div className="mx-80 px-7 flex-1 flex flex-col md:mx-64 lg:mx-80 sm:mx-16">
        <div className="items-center flex justify-left gap-4 my-4">
          <Link to="/home">
            <button className="text-orange-700 hover:text-orange-500 justify-center items-center">
              {<MoveLeft size={20} />}
            </button>
          </Link>
          <h1 className="text-3xl font-semibold text-orange-700">Status</h1>
        </div>
        <div className="bg-orange-100 w-full p-4 justify-center rounded-md shadow-md mb-4">
          <div className="flex gap-4">
            <img
              src={
                thread?.threads.photo_profile ||
                "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              }
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <p className="font-semibold text-md text-orange-700">
                {thread?.threads.full_name}
              </p>
              <p className="text-xs text-left text-orange-500">
                @{thread?.threads.username}{" "}
                {thread?.createdAt && (
                  <span>
                    • {new Date(thread?.createdAt).toLocaleDateString()}
                  </span>
                )}
              </p>
            </div>
          </div>
          <h2 className="my-4 text-stone-900 leading-relaxed">
            {thread?.content}
          </h2>
          {thread?.image && (
            <img
              src={`http://localhost:3000/uploads/${thread.image}`}
              className="mt-2 rounded-2xl w-full max-h-[500px] object-cover border"
            />
          )}
          <div className="flex items-center gap-2 mt-4 mb-4 text-orange-500">
            {thread?.isLiked ? (
              <button className="flex items-center gap-2">
                <Heart
                  className={`h-5 w-5 hover:text-orange-700 transition fill-orange-500 text-orange-500`}
                />
                <span>{thread.likeCount}</span>
              </button>
            ) : (
              <button className="flex items-center gap-2">
                <Heart
                  className={`h-5 w-5 hover:text-orange-700 transition text-orange-500`}
                />
                <span>{thread?.likeCount}</span>
              </button>
            )}
            <button className="flex items-center gap-1 hover:text-orange-700 transition">
              <MessageSquare size={16} />
              <span>{thread?.replyCount} Replies</span>
            </button>
          </div>
          <form
            onSubmit={handleReply}
            className="w-full border-orange-200"
            encType="multipart/form-data"
          >
            <InputGroup className="border-orange-200 hover:border-orange-300 rounded-lg p-2 mt-4 items-center flex flex-col">
              <InputGroupTextarea
                id="content"
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tulis Reply"
                className="text-orange-500 my-auto"
              />
              <InputGroupAddon align="block-end">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  placeholder="Upload gambar"
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
          <h1 className="text-orange-700 text-2xl font-semibold mb-4 border-t border-orange-300 border-spacing-y-3">
            Reply
          </h1>
          {reply.length > 0 ? (
            reply.map((replies) => (
              <div className="w-full bg-orange-200 rounded-md border border-orange-300 mb-2">
                <ReplyCard key={replies.id} reply={replies} />
              </div>
            ))
          ) : (
            <div className="w-full bg-orange-200 rounded-md mb-2 text-center">
              <h1 className="text-orange-700 font-semibold">Belum ada Reply</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
