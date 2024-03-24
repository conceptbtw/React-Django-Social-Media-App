import { Link } from "react-router-dom";
import {
  FaBell,
  FaHouse,
  FaMagnifyingGlass,
  FaPen,
  FaUser,
} from "react-icons/fa6";

export default function Header() {
  return (
    <header className="p-4 flex justify-center items-center text-white">
      <nav className="flex justify-center items-center">
        <ul className="flex justify-center items-center gap-4 text-3xl">
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-90 transition-all ease-in-out duration-250">
            <Link className="px-8 py-4" to="/">
              <FaHouse />
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-90 transition-all ease-in-out duration-250">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/search"
            >
              <FaMagnifyingGlass />
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-90 transition-all ease-in-out duration-250">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/post"
            >
              <FaPen />
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-90 transition-all ease-in-out duration-250">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/notifications"
            >
              <FaBell />
            </Link>
          </li>
          <li className="flex justify-center items-center rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-90 transition-all ease-in-out duration-250 ">
            <Link
              className="px-8 py-4 flex justify-center items-center rounded-xl"
              to="/profile"
            >
              <FaUser />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
