import type { Reply } from "@/types/Thread";

export default function ReplyCard({ reply }: { reply: Reply }) {
  return (
    <div>
      <div className="p-4 flex gap-4">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          alt="Profile"
          className="rounded-full w-14 h-14"
        />
        <div className="">
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold text-md text-orange-700">
              {reply.user.full_name}
            </h1>
            <p className="text-orange-500 text-sm">{reply.user.username}</p>
            <p className="text-orange-500 text-sm">
              • {new Date(reply.createdAt).toLocaleDateString()}
            </p>
          </div>
          <h1 className="text-stone-600">{reply.content}</h1>
          {reply.image && (
            <img
              src={`http://localhost:3000/uploads/${reply.image}`}
              className="mt-3 rounded-xl max-h-[400px] object-contain border"
            />
          )}
        </div>
      </div>
    </div>
  );
}
