import PostList from "../components/PostList";

export default function Home() {
  return (
    <main className="w-full max-w-screen-sm p-4 flex flex-1 flex-col items-center text-white">
      <PostList />
    </main>
  );
}
