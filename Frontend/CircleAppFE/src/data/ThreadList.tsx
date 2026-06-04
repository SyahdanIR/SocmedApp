// components/ThreadList.tsx
import ThreadCard from "@/components/ThreadCard";
import { dummyThreads, type Thread } from "@/data/dummyThread";
import { useState, useEffect } from "react";

function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    console.log("1. dummyThreads:", dummyThreads);

    // Pastikan data ada
    if (dummyThreads && dummyThreads.length > 0) {
      console.log("2. Set threads dengan data:", dummyThreads);
      setThreads(dummyThreads);
    } else {
      console.error("3. dummyThreads kosong!");
      // Data fallback
      const fallbackData = [
        {
          id: 1,
          content: "Test thread 1",
          username: "testuser",
          created_at: new Date().toISOString(),
          likes_count: 0,
        },
      ];
      setThreads(fallbackData);
    }
  }, []);

  console.log("4. threads state:", threads);
  console.log("5. jumlah threads:", threads.length);

  // Cek satu per satu data yang akan dirender
  return (
    <div className="space-y-4">
      {threads.map((thread, index) => {
        console.log(`6. Rendering thread ${index}:`, thread);
        return <ThreadCard key={thread.id} thread={thread} />;
      })}
    </div>
  );
}

export default ThreadList;
