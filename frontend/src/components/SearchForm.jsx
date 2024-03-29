export default function SearchForm() {
  return (
    <form className="w-full p-4 flex justify-center items-center gap-2 border border-white border-opacity-10 rounded-xl bg-black bg-opacity-10">
      <i className="fa-solid fa-magnifying-glass opacity-50"></i>
      <input
        className="w-full flex justify-center items-center bg-transparent outline-none placeholder:text-white placeholder:opacity-50"
        placeholder="Search"
        type="text"
      ></input>
    </form>
  );
}
