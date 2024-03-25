import NotificationItem from "./NotificationItem";

export default function NotificationList() {
  return (
    <ul className="w-full flex flex-col justify-center items-center">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </ul>
  );
}
