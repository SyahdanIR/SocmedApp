import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getThreadsById } from "@/services/ThreadService";
import type { Thread, Reply } from "@/types/Thread";
import { Heart, MessageSquare, MoveLeft } from "lucide-react";
import ReplyCard from "@/components/ReplyCard";

export default function detailThread() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [thread, setThread] = useState<Thread>();
  const [reply, setReply] = useState<Reply[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getThreadsById(Number(id));
      setThread(data.data);
      console.log(reply);
      setReply(data.data.replies);
    };
    fetchData();
  }, []);

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
        <div className="bg-orange-200 w-full p-4 justify-center rounded-md shadow-md mb-4">
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
                @{thread?.threads.username}
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
          {thread?.createdAt && (
            <p className="mt-4 text-orange-500">
              {new Date(thread?.createdAt).toLocaleDateString()}
            </p>
          )}
          <div className="flex items-center gap-2 mt-4 text-orange-500">
            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2"
            >
              <Heart
                className={`h-5 w-5 hover:text-orange-700 transition ${
                  liked ? "fill-orange-500 text-orange-500" : "text-orange-500"
                }`}
              />
              <span>{liked}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-orange-700 transition">
              <MessageSquare size={16} />
              <span>{thread?.created_by}</span>
            </button>
          </div>
        </div>
        {reply.length > 0 &&
          reply.map((replies) => (
            <div className="w-full bg-orange-200 rounded-md border">
              <ReplyCard key={replies.id} reply={replies}></ReplyCard>
            </div>
          ))}
      </div>
    </div>
  );
}
