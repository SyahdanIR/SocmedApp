import type { Thread } from "./Thread";

export interface Like {
  id: number;
  user_id: number;

  thread_id: number;
  created_by: number;
  updated_by: number;
  userid: User;
  threadLike: Thread;
  createby: User;
}

export interface User {
  id: number;
  username: string;
  full_name: string;
  email: string;
  photo_profile: string | null;
}
