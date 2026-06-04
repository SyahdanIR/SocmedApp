// data/dummyThread.ts
export interface Thread {
  id: number;
  content: string;
  username: string;
  avatar?: string;
  created_at: string;
  likes_count: number;
}

// Pastikan ada default export atau named export
export const dummyThreads: Thread[] = [
  {
    id: 1,
    content: "Selamat datang di AntiSocial!!!!",
    username: "syahdanir",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    created_at: new Date().toISOString(),
    likes_count: 15,
  },
  {
    id: 2,
    content: "Lagi belajar React nih",
    username: "johndoe",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
    created_at: new Date().toISOString(),
    likes_count: 7,
  },
];

// Optional: default export juga
export default dummyThreads;
