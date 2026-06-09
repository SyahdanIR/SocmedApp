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
  replies: Reply;
}

export interface Reply {
  id: number;
  user_id: number;
  thread_id: number;
  image: string;
  content: string;
  createdAt: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  user: {
    id: number;
    username: string;
    full_name: string;
    email: string;
    photo_profile: string | null;
  };
}
