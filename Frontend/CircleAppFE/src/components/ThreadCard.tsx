import type { Thread } from "@/types/Thread";
import { Heart, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ThreadCard({ thread }: { thread: Thread }) {
  const [liked, setLiked] = useState(false);

  if (!thread) {
    return (
      <div className="bg-red-100 p-4 rounded-lg text-red-700">
        Error: Data thread tidak ditemukan
      </div>
    );
  }

  return (
    <div className="w-full mt-4 bg-orange-200 border border-stone-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition-all duration-200">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0 items-center justify-center">
          <img
            src={
              thread.threads.photo_profile ||
              "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
            }
            alt={thread.threads.username}
            className="w-12 h-12 rounded-full object-cover border"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-orange-700">
              {thread.threads.full_name}
            </h3>

            <span className="text-orange-500 text-sm">
              @{thread.threads.username}
            </span>

            <span className="text-orange-400 text-sm">
              • {new Date(thread.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Thread Content */}
          <p className="mt-2 text-stone-900 leading-relaxed">
            {thread.content}
          </p>

          {/* Thread Image */}
          {thread.image && (
            <img
              src={`http://localhost:3000/uploads/${thread.image}`}
              alt="Thread"
              className="mt-3 rounded-xl max-h-[400px] object-contain border"
            />
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
            <Link to={`/thread/${thread.id}`}>
              <button className="flex items-center gap-1 hover:text-orange-700 transition">
                <MessageSquare size={16} />
                <span>{thread.created_by}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
