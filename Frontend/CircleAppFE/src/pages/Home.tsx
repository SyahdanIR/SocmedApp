import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useState, useEffect } from "react";
import ThreadCard from "@/components/ThreadCard";
import { getThreads, createThread, toggleLike } from "@/services/ThreadService";
import { socket } from "@/lib/socket";
import { useDispatch } from "react-redux";
import { addThread, setThreads, toggleLikeLocal } from "@/store/ThreadSlice";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUserProfile } from "@/store/UserSlicer";

function Home() {
  const dispatch = useDispatch();
  const dispatch2 = useAppDispatch();
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { data: user, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch2(fetchUserProfile());
  }, [dispatch2]);

  const threads = useSelector((state: RootState) => state.thread.threads);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);

      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  useEffect(() => {
    const fetchThreads = async () => {
      const data = await getThreads();
      console.log(data.threads);
      dispatch(setThreads(data.threads));
    };

    fetchThreads();
  }, []);

  useEffect(() => {
    socket.on("new-thread", (thread) => {
      console.log("CONNECTED", socket.id);
      console.log("RAW SOCKET:", thread);
      dispatch(addThread(thread));
    });
    return () => {
      socket.off("new-thread");
    };
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createThread(content, image);

    setContent("");
    setImage(null);
  };

  const handleLike = async (threadId: number) => {
    try {
      await toggleLike(threadId);

      dispatch(toggleLikeLocal(threadId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Sidebar />
      <Profile />
      <div className="flex-1 flex flex-col items-center md:mx-64 lg:mx-80 sm:mx-16">
        <div className="p-7 flex justify-between items-between w-full">
          <h1 className="text-2xl font-bold">Home</h1>
          <div className=""></div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full px-7"
          encType="multipart/form-data"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-6 w-full hover:shadow-md">
            <div className="flex gap-4">
              <img
                src={
                  user?.photo_profile
                    ? `http://localhost:3000/uploads/${user.photo_profile}`
                    : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                }
                alt="User Profile"
                className="w-12 h-12 rounded-full object-cover shrink-0"
              />

              <div className="flex-1">
                <textarea
                  placeholder="Apa yang anda pikirkan?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  id="content"
                  className="w-full bg-transparent border-none text-md resize-none placeholder-stone-400 text-gray-600 focus:ring-0 focus:border-none focus:outline-none"
                  rows={2}
                />
                {/* Preview Gambar */}
                {imagePreview && (
                  <div className="relative mt-2 inline-block">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg border border-stone-200"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImage(null);
                        setImagePreview(null);
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                    >
                      x
                    </button>
                  </div>
                )}
                <div className="h-px bg-stone-200 my-4 w-full"></div>

                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Add Media
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>

                  <button className="bg-[#9f4200] hover:bg-orange-700 text-white px-8 py-2.5 rounded-2xl font-bold transition-all shadow-sm hover:shadow-md active:scale-95">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="w-full px-7">
          {threads.map((thread) => (
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
export default Home;
