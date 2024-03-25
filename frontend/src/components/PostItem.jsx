import { FaHeart, FaMessage } from "react-icons/fa6";

export default function PostItem() {
  const firstName = "Illia";
  const lastName = "Movchko";
  const username = "@conceptbtw";
  const profilePicture = "/src/assets/images/profile.png";
  const postTime = "10 min";
  const postText = "Frontend Developer (React) from Lviv, Ukraine";
  const postImage = "/src/assets/images/profile.png";
  const postLikes = 100;
  const postComments = 100;

  return (
    <li className="py-4 w-full flex flex-col gap-4 border-b border-white border-opacity-10">
      <div className="flex items-center gap-2">
        <img
          className="w-8 h-8 border rounded-full"
          src={profilePicture}
          alt=""
        ></img>
        <span className="font-bold">
          {firstName} {lastName}
        </span>
        <span className="opacity-50">{username}</span>
        <span className="opacity-50">·</span>
        <span className="opacity-50">{postTime}</span>
      </div>
      <div className="px-4 flex">
        <span className="">{postText}</span>
      </div>
      <div className="px-4 flex">
        <img className="rounded-xl" src={postImage} alt=""></img>
      </div>
      <div className="px-4 flex items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <button className="text-xl">
            <FaHeart />
          </button>
          <span className="">{postLikes}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="text-xl">
            <FaMessage />
          </button>
          <span className="">{postComments}</span>
        </div>
      </div>
    </li>
  );
}
