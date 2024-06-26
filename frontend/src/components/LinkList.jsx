import useData from "../hooks/useData";
import LinkItem from "./LinkItem";

export default function LinkList() {
  const url = "";
  const { data, loading, error } = useData({ url });

  if (loading || error || !Array.isArray(data)) {
    return null;
  }

  return (
    <ul className="flex justify-center items-center text-xl gap-4">
      {data.map((item) => (
        <LinkItem key={item.id} data={item} />
      ))}
    </ul>
  );
}
