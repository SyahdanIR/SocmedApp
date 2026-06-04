export interface Thread {
  id: number;
  content: string | null;
  image: string | null;
  number_of_replies: number;
  created_by: number;
  createdAt: string;
  updated_at: string;
  updated_by: number;
  threads: {
    id: number;
    username: string;
    full_name: string;
    email: string;
    photo_profile: string | null;
  };
}
