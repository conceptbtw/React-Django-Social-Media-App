export default function PostItem({ data }) {
  const firstName = "Illia";
  const lastName = "Movchko";
  const username = "@conceptbtw";
  const profilePicture = "/src/assets/images/profile.png";
  const time = "10 min";
  const text = "Frontend Developer (React) from Lviv, Ukraine";
  const image = "/src/assets/images/profile.png";
  const likes = 100;
  const comments = 100;

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
        <span className="opacity-50">{time}</span>
      </div>
      <div className="px-4 flex">
        <span className="">{text}</span>
      </div>
      <div className="px-4 flex">
        <img className="rounded-xl" src={image} alt=""></img>
      </div>
      <div className="px-4 flex items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <button className="text-xl">
            <i className="fa-solid fa-heart"></i>
          </button>
          <span className="">{likes}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="text-xl">
            <i className="fa-solid fa-message"></i>
          </button>
          <span className="">{comments}</span>
        </div>
      </div>
    </li>
  );
}
