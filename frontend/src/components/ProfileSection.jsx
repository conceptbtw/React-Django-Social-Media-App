import { Link } from "react-router-dom";
import LinkList from "./LinkList";

export default function ProfileSection() {
  const firstName = "Illia";
  const lastName = "Movchko";
  const username = "@conceptbtw";
  const profilePicture = "/src/assets/images/profile.png";
  const bio = "Frontend Developer (React) from Lviv, Ukraine";
  const followers = 100;
  const following = 100;
  const isMyProfile = true;
  const isFollowing = false;

  return (
    <section className="pb-4 w-full flex flex-col justify-center items-center gap-4 border-b border-white border-opacity-10">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold">
            {firstName} {lastName}
          </span>
          <span className="">{username}</span>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-24 h-24 border rounded-full"
            src={profilePicture}
            alt="Profile Picture"
          ></img>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex">
          <LinkList />
        </div>
        <div className="flex">
          <span className="">{bio}</span>
        </div>
        <div className="w-full flex gap-4">
          <Link className="hover:underline">{followers} followers</Link>
          <Link className="hover:underline">{following} following</Link>
        </div>
        <div className="w-full">
          {isMyProfile ? (
            <Link
              to="/edit"
              className="w-full p-2 flex justify-center items-center border border-white border-opacity-10 rounded bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250"
            >
              Edit profile
            </Link>
          ) : (
            <>
              {isFollowing ? (
                <button className="w-full p-2 flex justify-center items-center border border-white border-opacity-10 rounded bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250">
                  Unfollow
                </button>
              ) : (
                <button className="w-full p-2 flex justify-center items-center border border-white border-opacity-10 rounded bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250">
                  Follow
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
