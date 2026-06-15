import Sidebar from "@/components/Sidebar";
import React, {
  useState,
  useMemo,
  useEffectEvent,
  useLayoutEffect,
  useEffect,
} from "react";
import { Search, UserPlus, Check } from "lucide-react";
import { searchUserResult } from "@/store/UserSlicer";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { handlingFollow } from "@/store/FollowSlice";

// Type definitions
interface User {
  id: number;
  full_name: string;
  username: string;
  bio: string;
  following: boolean;
}

const Searching: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useAppDispatch();
  const { searchResult, error, loading } = useAppSelector(
    (state) => state.user,
  );
  // const { followData, isFollowed } = useAppSelector((state) => state.follow);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchUserResult(searchQuery));
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, searchQuery]);

  // Handle follow button click (optional)
  const handleFollowToggle = async (userId: number) => {
    await dispatch(handlingFollow(userId)).unwrap();
    await dispatch(searchUserResult(searchQuery)).unwrap();
  };
  return (
    <div>
      <Sidebar />
      <div className="ml-80 flex-1 flex flex-col items-center md:ml-64 lg:ml-80 sm:ml-16">
        <div className="w-full min-h-screen bg-[#FDFBF7] p-8">
          {/* Header Area */}
          <div className="max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl font-bold text-[#4A3728] mb-6">
              Find People
            </h1>

            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#8C7867]" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-[#E8E2D9] rounded-2xl text-[#4A3728] placeholder-[#A89A8E] focus:outline-none focus:ring-2 focus:ring-[#8C7867] focus:border-transparent transition-all shadow-sm"
                placeholder="Search for users by name or username..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
              />
            </div>
          </div>

          {/* User Results Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {searchResult.map((user) => (
              <div
                key={user.id}
                className="bg-white p-6 rounded-2xl border border-[#E8E2D9] flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  {/* Avatar Placeholder */}
                  <div className="w-14 h-14 rounded-full bg-[#E8E2D9] flex items-center justify-center overflow-hidden">
                    <img
                      src={
                        user.photo_profile
                          ? `http://localhost:3000/uploads/${user.photo_profile}`
                          : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                      }
                      alt={user.full_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#4A3728] leading-tight">
                      {user.full_name}
                    </h3>
                    <p className="text-sm text-[#8C7867] mb-1">
                      {user.username}
                    </p>
                    <p className="text-xs text-[#A89A8E] line-clamp-1">
                      {user.bio}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleFollowToggle(user.id)}
                  className={`ml-4 px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                    user.isFollowed
                      ? "bg-[#E8E2D9] text-[#8C7867] hover:bg-[#DCD4CA]"
                      : "bg-[#4A3728] text-white hover:bg-[#5D4634]"
                  }`}
                >
                  {user.isFollowed ? (
                    <>
                      <Check size={16} />
                      Following
                    </>
                  ) : (
                    <>
                      <UserPlus size={16} />
                      Follow
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {searchQuery && searchResult.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8C7867]">
                No users found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Searching;
