import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundPen } from "lucide-react";
import NavbarButton from "./ButtonCustom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  fetchUserProfile,
  getRecommendedUser,
  updateRecommendationFollowState,
} from "@/store/UserSlicer";
import { UpdateProfile } from "./ui/UpdateProfile";
import { FollowList } from "./FollowList";
import { handlingFollow } from "@/store/FollowSlice";

function profile() {
  const dispatch = useAppDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isFollowListOpen, setIsFollowListOpen] = useState(false);
  const {
    data: user,
    loading,
    error,
    recommendations,
  } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(getRecommendedUser());
  }, [dispatch]);

  const followHandle = async (id: number) => {
    dispatch(updateRecommendationFollowState({ userId: id }));
    try {
      await dispatch(handlingFollow(id)).unwrap();
      await dispatch(fetchUserProfile());
    } catch (error) {
      dispatch(updateRecommendationFollowState({ userId: id }));
    }
  };

  if (loading) {
    return (
      <aside className="fixed top-0 right-0 h-screen bg-[#fbf8f7] p-4 shadow-lg order-last md:w-64 lg:w-80 sm:w-16 border border-[#eedcd5]">
        <Card className="flex flex-col gap-4 bg-[#f6f1eb] text-stone-800 sm:hidden md:inline-flex lg:inline-flex w-full border border-[#eedcd5]">
          <CardTitle className="font-md text-[#b75910] font-bold text-center">
            LOADING DATA PROFILE
          </CardTitle>
        </Card>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="fixed top-0 right-0 h-screen bg-[#fbf8f7] p-4 shadow-lg order-last md:w-64 lg:w-80 sm:w-16 border border-[#eedcd5]">
        <Card className="flex flex-col gap-4 bg-[#f6f1eb] text-stone-800 sm:hidden md:inline-flex lg:inline-flex w-full border border-[#eedcd5]">
          <CardTitle className="font-md text-red-500 font-bold text-center">
            ERROR FETCHING PROFILE : {error}
          </CardTitle>
        </Card>
      </aside>
    );
  }
  return (
    <aside className="fixed top-0 right-0 h-screen bg-[#fbf8f7] p-4 shadow-lg order-last md:w-64 lg:w-80 sm:w-16 border border-[#eedcd5]">
      <Card className="flex flex-col gap-4 bg-[#f6f1eb] text-stone-800 sm:hidden md:inline-flex lg:inline-flex w-full border border-[#eedcd5]">
        <CardHeader>
          <CardTitle className="font-md text-[#b75910] font-bold">
            MY PROFILE
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-center">
            <img
              src={
                user?.photo_profile
                  ? `http://localhost:3000/uploads/${user.photo_profile}`
                  : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              }
              alt="pfp"
              className="rounded-full w-20 h-20 border-2 border-white shadow-md"
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-gray-700">{user?.full_name}</p>
            <p className="text-xs text-[#b75910] mb-4">@{user?.username}</p>
            <div className="flex justify-center w-full gap-9 mb-3">
              <div>
                <p className="text-lg font-bold text-gray-700">
                  {user?.followingCount}
                </p>
                <a
                  onClick={() => setIsFollowListOpen(true)}
                  className="font-semibold text-[#b75910] cursor-pointer hover:underline hover: font-semibold"
                >
                  FOLLOWERS
                </a>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-700">
                  {user?.followerCount}
                </p>
                <a
                  onClick={() => setIsFollowListOpen(true)}
                  className="font-semibold text-[#b75910] cursor-pointer hover:underline hover: font-semibold"
                >
                  FOLLOWING
                </a>
              </div>
            </div>
            <div className="bg-[#fbf8f7] rounded-xl p-2 w-full">
              <p className="text-xs text-[#b75910] text-start font-semibold ml-2 mb-1">
                BIODATA
              </p>
              {user?.bio ? (
                <p className="ml-2 break-words whitespace-normal text-start min-h-16 text-gray-700">
                  {user?.bio}
                </p>
              ) : (
                <p className="ml-2 break-words whitespace-normal text-start min-h-16 text-gray-500">
                  User hasn't added biodata
                </p>
              )}

              <button
                onClick={() => setIsEditOpen(true)}
                className="bg-[#9f4200] w-full p-1 text-gray-200 rounded font-bold"
              >
                EDIT PROFILE
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      {Array.isArray(recommendations) && recommendations.length > 0 && (
        <Card className="flex flex-col gap-4 bg-[#f6f1eb] text-stone-800 sm:hidden md:inline-flex lg:inline-flex w-full border border-[#eedcd5] mt-4">
          <CardHeader>
            <CardTitle className="font-md text-[#b75910] font-bold">
              Suggested for you
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Looping hanya untuk konten user */}
            {recommendations.length == 0 && (
              <div className="flex gap-3 h-full border bg-[#fbf8f7] p-2 rounded-md mb-1 items-center justify-between">
                <div>Tidak ada saran</div>
              </div>
            )}
            {recommendations.map((user) => (
              <div
                key={user.id}
                className="flex gap-3 h-full border bg-[#fbf8f7] p-2 rounded-md mb-1 items-center justify-between"
              >
                <div className="flex gap-3">
                  <img
                    src={
                      user.photo_profile
                        ? `http://localhost:3000/uploads/${user.photo_profile}`
                        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                    }
                    className="w-10 h-10 rounded-full"
                    alt={user.full_name}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      {user.full_name}
                    </p>
                    <p className="text-xs text-[#b75910]">@{user.username}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => followHandle(user.id)}
                    className={`w-auto p-1 h-6 rounded text-[#b75910] font-bold ${user.isFollowed ? "bg-[#E8E2D9] text-[#8C7867] hover:bg-[#DCD4CA]" : "bg-[#9f4200] text-white hover:bg-[#5D4634]"}`}
                  >
                    {user.isFollowed ? "Following" : "Follow"}
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <UpdateProfile isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
      <FollowList
        isOpen={isFollowListOpen}
        onClose={() => setIsFollowListOpen(false)}
      />

      <div className="md:hidden lg:hidden sm:inline">
        <NavbarButton toPage="/edit-profile" DisplayText={<UserRoundPen />} />
      </div>
    </aside>
  );
}

export default profile;
