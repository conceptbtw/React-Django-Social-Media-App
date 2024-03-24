import { FaHeart, FaMessage } from "react-icons/fa6";

export default function PostItem() {
  return (
    <li className="py-4 w-full flex flex-col gap-4 border-b border-white border-opacity-10">
      <div className="flex items-center gap-2">
        <img
          className="w-8 h-8 border rounded-full"
          src="/src/assets/images/profile.png"
          alt=""
        ></img>
        <span className="font-bold">Illia Movchko</span>
        <span className="opacity-50">@conceptbtw</span>
        <span className="opacity-50">·</span>
        <span className="opacity-50">10 min</span>
      </div>
      <div className="px-4 flex">
        <span className="">Frontend Developer (React) from Lviv, Ukraine</span>
      </div>
      <div className="px-4 flex">
        <img
          className="rounded-xl"
          src="/src/assets/images/profile.png"
          alt=""
        ></img>
      </div>
      <div className="px-4 flex items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <button className="text-xl">
            <FaHeart />
          </button>
          <span className="">100</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="text-xl">
            <FaMessage />
          </button>
          <span className="">100</span>
        </div>
      </div>
    </li>
  );
}
