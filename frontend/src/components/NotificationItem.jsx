export default function NotificationItem() {
  return (
    <li className="py-4 w-full flex items-center gap-2 border-b border-white border-opacity-10">
      <img
        className="w-12 h-12 border rounded-full"
        src="/src/assets/images/mxxnly.jpg"
        alt=""
      ></img>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">Maksym Skladan</span>
            <span className="opacity-50">@mxxnly</span>
          </div>
          <div className="flex justify-center items-center">
            <span className="opacity-50">10 min</span>
          </div>
        </div>
        <div className="flex">
          <span className="">Started following you</span>
        </div>
      </div>
    </li>
  );
}
