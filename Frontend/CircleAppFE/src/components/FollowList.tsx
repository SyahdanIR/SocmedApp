import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowData } from "@/store/FollowSlice";

interface FollowListProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FollowList: React.FC<FollowListProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("followers");

  const dispatch = useDispatch();
  const { followers, following, loading, error } = useSelector(
    (state: any) => state.follow,
  );

  useEffect(() => {
    dispatch(getFollowData() as any);
  }, [dispatch]);

  if (loading) return <div>Loading... </div>;

  // DUMMY DATA - nanti ganti sendiri

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
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                  {user.full_name?.charAt(0) || user.username?.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {user.full_name}
                  </p>
                  <p className="text-xs text-gray-500">@{user.username}</p>
                </div>
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
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                  {user.full_name?.charAt(0) || user.username?.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {user.full_name}
                  </p>
                  <p className="text-xs text-gray-500">@{user.username}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
