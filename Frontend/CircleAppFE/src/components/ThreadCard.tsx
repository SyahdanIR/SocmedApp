// components/ThreadCard.tsx
interface Thread {
  id: number;
  content: string;
  username: string;
  avatar?: string;
  created_at: string;
  likes_count: number;
}

export default function ThreadCard({ thread }: { thread: Thread }) {
  console.log("ThreadCard received:", thread);

  // Handle jika thread undefined
  if (!thread) {
    console.error("ThreadCard: thread is undefined!");
    return (
      <div className="bg-red-100 p-4 rounded-lg text-red-700">
        Error: Data thread tidak ditemukan
      </div>
    );
  }

  // Handle jika data tidak lengkap
  if (!thread.username || !thread.content) {
    console.warn("ThreadCard: data tidak lengkap", thread);
    return (
      <div className="bg-yellow-100 p-4 rounded-lg text-yellow-700">
        Warning: Data thread tidak lengkap
      </div>
    );
  }

  return (
    <div className="flex gap-2 bg-orange-200 text-stone-800 w-full mt-4 p-2 rounded-lg">
      <div className="flex-shrink-0 p-2">
        <img
          src={
            thread.avatar ||
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          className="rounded-full w-10 h-10"
          alt={thread.username}
        />
      </div>
      <div className="flex-1 p-2">
        <p className="text-lg font-bold text-orange-700 mb-2">
          @{thread.username}
        </p>
        <p className="text-sm text-orange-600">{thread.content}</p>
      </div>
    </div>
  );
}
