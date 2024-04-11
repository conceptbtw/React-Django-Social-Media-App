import ProfileSection from "../components/ProfileSection";
import PostList from "../components/PostList";

export default function Profile() {
  return (
    <main className="w-full max-w-screen-sm p-4 flex flex-1 flex-col items-center text-white">
      <ProfileSection />
      <PostList />
    </main>
  );
}
