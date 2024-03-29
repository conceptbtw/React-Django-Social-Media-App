import PostList from "./PostList";

export default function MainHome() {
  return (
    <main className="w-full max-w-screen-sm p-4 flex flex-1 flex-col items-center text-white">
      <PostList />
    </main>
  );
}
