import PostList from "./PostList";
import ProfileSection from "./ProfileSection";

export default function MainProfile() {
  return (
    <main className="w-full max-w-screen-sm p-4 flex flex-col justify-center items-center text-white">
      <ProfileSection />
      <PostList />
    </main>
  );
}
