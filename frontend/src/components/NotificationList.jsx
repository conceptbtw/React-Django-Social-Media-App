import useData from "../hooks/useData";
import NotificationItem from "./NotificationItem";

export default function NotificationList() {
  const url = "";
  const { data, loading, error } = useData({ url });

  if (loading) {
    return (
      <div className="w-full flex flex-1 justify-center items-center">
        <img className="max-w-16" src="loading.svg" alt="Loading"></img>
      </div>
    );
  }

  if (error || !Array.isArray(data)) {
    return (
      <div className="w-full flex flex-1 justify-center items-center">
        <span className="flex justify-center items-center text-xl">
          There are no notifications
        </span>
      </div>
    );
  }

  return (
    <ul className="w-full flex flex-col justify-center items-center">
      {data.map((item) => (
        <NotificationItem key={item.id} data={item} />
      ))}
    </ul>
  );
}
