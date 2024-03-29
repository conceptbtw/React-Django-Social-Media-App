import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 flex justify-center items-center text-white">
      <nav className="flex justify-center items-center">
        <ul className="flex justify-center items-center gap-4 text-3xl">
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250">
            <Link className="px-8 py-4" to="/">
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/post"
            >
              <i className="fa-solid fa-pen"></i>
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-90 transition-all ease-in-out duration-250">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/notifications"
            >
              <i className="fa-solid fa-bell"></i>
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250 ">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/profile"
            >
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
