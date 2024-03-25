import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

export default function MainSearch() {
  return (
    <main className="w-full max-w-screen-sm p-4 flex flex-col justify-center items-center gap-4 text-white">
      <SearchForm />
      <SearchList />
    </main>
  );
}
