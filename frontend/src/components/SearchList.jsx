import useData from "../hooks/useData";
import SearchItem from "./SearchItem";

export default function SearchList() {
  const url = "";
  const { data, loading, error } = useData({ url });

  return (
    <ul className="w-full flex flex-col justify-center items-center">
      {/*data.map((item) => (
        <SearchItem key={item.id} data={item} />
      ))*/}
      <SearchItem />
    </ul>
  );
}
