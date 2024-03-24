import PostList from "./PostList";

export default function MainHome() {
  return (
    <main className="w-full max-w-screen-sm p-4 flex flex-col justify-center items-center text-white">
      <PostList />
    </main>
  );
}
