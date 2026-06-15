import { FollowList } from "@/components/FollowList";
import Sidebar from "@/components/Sidebar";
import ThreadCard from "@/components/ThreadCard";
import { UpdateProfile } from "@/components/ui/UpdateProfile";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getThreads, toggleLike } from "@/services/ThreadService";
import { setThreads, toggleLikeLocal } from "@/store/ThreadSlice";
import { fetchUserProfile } from "@/store/UserSlicer";
import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

function profile() {
  const dispatch = useAppDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isFollowListOpen, setIsFollowListOpen] = useState(false);
  const { data: user, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    const fetchthreads = async () => {
      const data = await getThreads();
      dispatch(setThreads(data.threads));
    };
    fetchthreads();
  }, []);

  const threads = useAppSelector((state) => state.thread.threads);
  const myThreads = threads.filter((thread) => thread.created_by === user?.id);
  console.log("isi my Threads: ", myThreads);

  const handleLike = async (threadId: number) => {
    try {
      await toggleLike(threadId);

      dispatch(toggleLikeLocal(threadId));
    } catch (error) {
      console.error(error);
    }
  };
  if (loading) {
    return (
      <div>
        <Sidebar />
        <div className="ml-80 text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Sidebar />
        <div className="ml-80 text-center text-red-500">Error : {error}</div>
      </div>
    );
  }
  return (
    <div>
      <Sidebar />
      <div className="ml-80 flex-1 flex flex-col items-center md:ml-64 lg:ml-80 sm:ml-16">
        {/* User Profile Section - tanpa sidebar */}
        <div className="w-full">
          {/* Header / Cover Section sederhana */}
          <div className="relative h-52 bg-[#f3ecea] overflow-visible mb-8 rounded-bl-2xl rounded-br-2xl border shadow">
            <div className="absolute inset-0 opacity-20 ">
              <svg width="100%" height="100%" viewBox="0 0 1440 320">
                <path
                  fill="#ff6d00"
                  d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
              </svg>
            </div>
            <div className="absolute -bottom-12 left-8">
              <img
                src={
                  user?.photo_profile
                    ? `http://localhost:3000/uploads/${user.photo_profile}`
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                }
                className="rounded-full mt-32 h-40 w-40 border-2 border-stone-100"
              ></img>
            </div>
          </div>

          <div className="flex justify-between items-end mb-8 pl-40">
            <div>
              <h1 className="text-3xl font-black mb-1 ml-9">
                {user?.full_name}
              </h1>
              <p className="text-[#9f4200] font-medium ml-9">
                @{user?.username}
              </p>
            </div>
            <button
              onClick={() => setIsEditOpen(true)}
              className="bg-[#9f4200] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#e66200] transition-all flex items-center gap-2 mr-4"
            >
              Edit Profile
            </button>
          </div>

          {/* About & Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mx-4">
            <div className="md:col-span-2 bg-white border border-[#dcd9d9] rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-[#9f4200] uppercase text-xs tracking-widest mb-3">
                About Me
              </h4>
              {user?.bio ? (
                <p className="text-[#53433f] leading-relaxed italic">
                  "{user.bio}"
                </p>
              ) : (
                <p className="text-gray-400">This user hasn't added biodata</p>
              )}

              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#f3ecea]">
                <div className="flex items-center justify-center gap-2 text-sm text-[#53433f]">
                  <CalendarCheck /> Joined June 2026
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#dcd9d9] rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-[#9f4200] uppercase text-xs tracking-widest mb-3">
                Stats
              </h4>
              <div className="flex gap-4">
                <div className="flex-1 bg-[#f3ecea] p-3 rounded-xl text-center">
                  <p className="text-xl font-black text-[#9f4200]">
                    {user?.followingCount}
                  </p>
                  <a
                    onClick={() => setIsFollowListOpen(true)}
                    className="text-[10px] font-bold text-[#85736f] uppercase cursor-pointer hover:underline hover:font-semibold"
                  >
                    Followers
                  </a>
                </div>
                <div className="flex-1 bg-[#f3ecea] p-3 rounded-xl text-center">
                  <p className="text-xl font-black text-[#9f4200]">
                    {user?.followerCount}
                  </p>
                  <a
                    onClick={() => setIsFollowListOpen(true)}
                    className="text-[10px] font-bold text-[#85736f] uppercase cursor-pointer hover:underline hover:font-semibold"
                  >
                    Following
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Tabs */}
          <div className="space-y-6">
            <div className="flex gap-4 mx-4 justify-between w-full items-between mb-3">
              <h4 className="font-bold text-[#9f4200] uppercase text-xs tracking-widest items-between ml-3">
                Recent activity
              </h4>
            </div>

            <div className="bg-white border border-[#dcd9d9] rounded-2xl p-6 shadow-sm mx-4 mb-4">
              <div className="w-full px-7">
                {myThreads.map((thread) => (
                  <ThreadCard
                    key={thread.id}
                    thread={thread}
                    onLike={() => handleLike(thread.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <UpdateProfile
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
        />
        <FollowList
          isOpen={isFollowListOpen}
          onClose={() => setIsFollowListOpen(false)}
        />
      </div>
    </div>
  );
}
export default profile;
