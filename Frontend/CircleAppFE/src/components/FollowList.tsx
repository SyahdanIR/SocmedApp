import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getFollowData,
  handlingFollow,
  updateFollowState,
} from "@/store/FollowSlice";
import { useAppDispatch } from "@/hooks/redux";

interface FollowListProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FollowList: React.FC<FollowListProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("followers");

  const dispatch = useAppDispatch();
  const { followers, following, loading } = useSelector(
    (state: any) => state.follow,
  );

  console.log("following : ", followers);

  useEffect(() => {
    dispatch(getFollowData() as any);
  }, [dispatch]);

  const followHandle = async (id: number) => {
    try {
      console.log(`following user ${id}`);
      dispatch(updateFollowState(id));
      await dispatch(handlingFollow(id)).unwrap();
    } catch (error) {
      throw error;
    }
  };

  if (loading) return <div>Loading... </div>;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-[#9f4200] font-bold">
            Follow List
          </DialogTitle>
        </DialogHeader>

        <Tabs
          defaultValue="followers"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 bg-[#f3ecea]">
            <TabsTrigger
              value="followers"
              className="data-[state=active]:bg-[#9f4200] data-[state=active]:text-white"
            >
              Followers
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="data-[state=active]:bg-[#9f4200] data-[state=active]:text-white"
            >
              Following
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="followers"
            className="mt-4 space-y-3 max-h-[400px] overflow-y-auto"
          >
            {following.map((user: any) => (
              <div
                key={user.id}
                className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                    {user.photo_profile ? (
                      <img
                        src={`http://localhost:3000/uploads/${user.photo_profile}`}
                        className="rounded-full"
                      />
                    ) : (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {user.full_name}
                    </p>
                    <p className="text-xs text-gray-500">@{user.username}</p>
                  </div>
                </div>
                <button
                  onClick={() => followHandle(user.id)}
                  className={`w-auto p-1 h-6 rounded text-[#b75910] font-bold ${user.isFollowed ? "bg-[#E8E2D9] text-[#8C7867] hover:bg-[#DCD4CA]" : "bg-[#9f4200] text-white hover:bg-[#5D4634]"}`}
                >
                  {user.isFollowed ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </TabsContent>

          <TabsContent
            value="following"
            className="mt-4 space-y-3 max-h-[400px] overflow-y-auto"
          >
            {followers.map((user: any) => (
              <div
                key={user.id}
                className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                    {user.photo_profile ? (
                      <img
                        src={`http://localhost:3000/uploads/${user.photo_profile}`}
                        className="rounded-full"
                      />
                    ) : (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {user.full_name}
                    </p>
                    <p className="text-xs text-gray-500">@{user.username}</p>
                  </div>
                </div>
                <button
                  onClick={() => followHandle(user.id)}
                  className={`w-auto p-1 h-6 rounded text-[#b75910] font-bold ${user.isFollowed ? "bg-[#E8E2D9] text-[#8C7867] hover:bg-[#DCD4CA]" : "bg-[#9f4200] text-white hover:bg-[#5D4634]"}`}
                >
                  {user.isFollowed ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
