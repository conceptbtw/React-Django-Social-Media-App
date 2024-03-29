import useData from "../hooks/useData";
import SearchItem from "./SearchItem";

export default function SearchList() {
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
          User not found
        </span>
      </div>
    );
  }

  return (
    <ul className="w-full flex flex-col justify-center items-center">
      {data.map((item) => (
        <SearchItem key={item.id} data={item} />
      ))}
    </ul>
  );
}
