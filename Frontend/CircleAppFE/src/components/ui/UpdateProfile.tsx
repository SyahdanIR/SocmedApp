import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  fetchUserProfile,
  updateUserProfile,
  updUserProfile,
} from "@/store/UserSlicer";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface UpdateProfileProps {
  isOpen: boolean;
  onClose: () => void;
}
export const UpdateProfile: React.FC<UpdateProfileProps> = ({
  isOpen,
  onClose,
}) => {
  const { data: user, loading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [bio, setBio] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen && user) {
      setFullName(user.full_name || "");
      setBio(user.bio || "");
      setSelectedFile(null);
      setImagePreview(null);
    }
  }, [isOpen, user]);

  const getAvatarUrl = (photo: string | null | undefined) => {
    if (!photo) return undefined;
    if (photo.startsWith("http:")) return photo;
    return `http://localhost:3000/uploads/${photo}`;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Hanya boleh memasukkan gambar");
        return;
      }
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      toast.error("Field Full Name tidak boleh kosong");
      return;
    }

    setIsSaving(true);

    try {
      const formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("bio", bio);
      if (selectedFile) {
        formData.append("photo_profile", selectedFile);
      }
      await dispatch(updUserProfile(formData)).unwrap();
      await dispatch(fetchUserProfile());
      toast.success("Berhasil update data profie");
      onClose();
    } catch (error) {
      console.error("gagal upd profile", error);
      toast.error("Gagal update profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) return null;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500">Error {error}</div>;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form id="update-profile-form" onSubmit={handleSubmit}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Avatar className="h-20 w-20 border-2 border-slate-200">
              {imagePreview ? (
                <AvatarImage src={imagePreview} alt="Preview Photo" />
              ) : (
                user.photo_profile && (
                  <AvatarImage
                    src={getAvatarUrl(user.photo_profile)}
                    alt={user.photo_profile}
                  />
                )
              )}
            </Avatar>
            <Field>
              <Label htmlFor="fullName">Nama Lengkap</Label>
              <Input
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </Field>

            <Field>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={user.username || ""}
                disabled
                className="bg-gray-100"
              />
              <p className="text-xs text-gray-500 mt-1">
                Username tidak bisa diganti
              </p>
            </Field>

            <Field>
              <Label htmlFor="bio">Biodata</Label>
              <textarea
                id="bio"
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6d00]"
                rows={3}
                placeholder="Tell something about yourself..."
              />
            </Field>

            <Field>
              <Label htmlFor="photo">Profile Photo</Label>
              <Input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedFile && (
                <p className="text-xs text-green-600 mt-1">
                  Selected: {selectedFile.name}
                </p>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isSaving}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              form="update-profile-form"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
