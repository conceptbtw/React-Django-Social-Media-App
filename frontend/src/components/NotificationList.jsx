import useData from "../hooks/useData";
import NotificationItem from "./NotificationItem";

export default function NotificationList() {
  const url = "";
  const { data, loading, error } = useData({ url });

  return (
    <ul className="w-full flex flex-col justify-center items-center">
      {/*data.map((item) => (
        <NotificationItem key={item.id} data={item} />
      ))*/}
      <NotificationItem />
    </ul>
  );
}
