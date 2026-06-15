import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import ThreadCard from "@/components/ThreadCard";
import { useAppSelector } from "@/hooks/redux";
import { getThreads, toggleLike } from "@/services/ThreadService";
import { setThreads, toggleLikeLocal } from "@/store/ThreadSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function follow() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchThread = async () => {
      const data = await getThreads();
      dispatch(setThreads(data.threads));
    };

    fetchThread();
  });

  const handleLike = async (threadId: number) => {
    try {
      await toggleLike(threadId);

      dispatch(toggleLikeLocal(threadId));
    } catch (error) {
      console.error(error);
    }
  };

  const threads = useAppSelector((state) => state.thread.threads);
  const user = useAppSelector((state) => state.user.data);
  const followingIds = user?.followingList.map((f) => f.follower_id) || [];
  const followingThreads = threads.filter((thread) =>
    followingIds.includes(thread.created_by),
  );
  return (
    <div>
      <Profile />
      <Sidebar />
      <div className="flex-1 flex flex-col items-center md:mx-64 lg:mx-80 sm:mx-16">
        <div className="p-7 flex flex-col gap-1 justify-between items-between w-full">
          <h1 className="text-2xl text-gray-700 font-bold">Followed Threads</h1>
          {followingThreads.map((thread) => (
            <ThreadCard
              key={thread.id}
              thread={thread}
              onLike={() => handleLike(thread.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default follow;
