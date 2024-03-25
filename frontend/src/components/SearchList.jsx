import SearchItem from "./SearchItem";

export default function SearchList() {
  return (
    <ul className="w-full flex flex-col justify-center items-center">
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </ul>
  );
}
