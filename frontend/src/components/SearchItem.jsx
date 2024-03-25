export default function SearchItem() {
  const firstName = "Maksym";
  const lastName = "Skladan";
  const username = "@mxxnly";
  const profilePicture = "/src/assets/images/mxxnly.jpg";
  const searchFollowers = 100;

  return (
    <li className="py-4 w-full flex items-center gap-2 border-b border-white border-opacity-10">
      <img
        className="w-12 h-12 border rounded-full"
        src={profilePicture}
        alt=""
      ></img>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">
              {firstName} {lastName}
            </span>
            <span className="opacity-50">{username}</span>
          </div>
        </div>
        <div className="flex">
          <span className="">{searchFollowers} followers</span>
        </div>
      </div>
      <button className="p-2 flex justify-center items-center border border-white border-opacity-10 rounded bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250">
        Follow
      </button>
    </li>
  );
}
