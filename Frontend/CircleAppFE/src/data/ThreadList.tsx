// fetch daata from api
import { getThreads } from "@/services/ThreadService";
import ThreadCard from "@/components/ThreadCard";
import { useState, useEffect } from "react";
import type { Thread } from "@/types/Thread";

function ThreadList() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const data = await getThreads();
        console.log("data:", data);
        setThreads(data.threads);
      } catch (error) {
        console.error("Error fetching threads:", error);
      }
    };
    fetchThreads();
  }, []);

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
