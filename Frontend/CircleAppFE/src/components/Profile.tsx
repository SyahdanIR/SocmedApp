import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundPen } from "lucide-react";
import NavbarButton from "./ButtonCustom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUserProfile } from "@/store/UserSlicer";

function profile() {
  const dispatch = useAppDispatch();
  const { data: user, loading, error } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

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
                <p className="text-lg font-bold text-gray-700">0</p>
                <p className="font-semibold text-[#b75910]">FOLLOWERS</p>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-700">0</p>
                <p className="font-semibold text-[#b75910]">FOLLOWING</p>
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
                  User belum menambahkan biodata
                </p>
              )}

              <button className="bg-[#9f4200] w-full p-1 text-gray-200 rounded font-bold">
                EDIT PROFILE
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="flex flex-col gap-4 bg-[#f6f1eb] text-stone-800 sm:hidden md:inline-flex lg:inline-flex w-full border border-[#eedcd5] mt-4">
        <CardHeader>
          <CardTitle className="font-md text-[#b75910] font-bold">
            SIAPA UNTUK DIIKUTI
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="md:hidden lg:hidden sm:inline">
        <NavbarButton toPage="/edit-profile" DisplayText={<UserRoundPen />} />
      </div>
    </aside>
  );
}

export default profile;
