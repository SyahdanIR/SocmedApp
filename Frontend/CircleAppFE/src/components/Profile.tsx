import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundPen } from "lucide-react";
import NavbarButton from "./ButtonCustom";

interface ProfileProps {
  name: string;
  username: string;
  email: string;
}

function profile() {
  const [user, setUser] = useState<ProfileProps>();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      const dataUser = JSON.parse(data) as ProfileProps;
      setUser(dataUser);
    }
  }, []);

  return (
    <aside className="fixed top-0 right-0 h-screen bg-orange-200 p-4 shadow-lg order-last md:w-64 lg:w-80 sm:w-16">
      <Card className="flex flex-col gap-4 bg-orange-100 text-stone-800 sm:hidden md:inline-flex lg:inline-flex w-full">
        <CardHeader>
          <CardTitle className="font-2xl text-orange-700" font-bold>
            My Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
            alt="pfp"
            className="rounded-full w-20 h-20"
          />
          <div>
            <p className="text-lg font-bold text-orange-700 mb-1.5">
              {user?.name}
            </p>
            <p className="text-sm text-orange-600 mb-1">@{user?.username}</p>
            <p className="text-sm text-orange-500">Biodata</p>
          </div>
        </CardContent>
      </Card>
      <div className="md:hidden lg:hidden sm:inline">
        <NavbarButton toPage="/edit-profile" DisplayText={<UserRoundPen />} />
      </div>
    </aside>
  );
}

export default profile;
