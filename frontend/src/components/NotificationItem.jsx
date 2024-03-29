export default function NotificationItem({ data }) {
  const firstName = "Maksym";
  const lastName = "Skladan";
  const username = "@mxxnly";
  const profilePicture = "/src/assets/images/mxxnly.jpg";
  const time = "10 min";
  const text = "Started following you";

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
          <div className="flex justify-center items-center">
            <span className="opacity-50">{time}</span>
          </div>
        </div>
        <div className="flex">
          <span className="">{text}</span>
        </div>
      </div>
    </li>
  );
}
