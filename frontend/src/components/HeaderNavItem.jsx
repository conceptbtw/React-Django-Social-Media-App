import { Link } from "react-router-dom";

export default function HeaderNavItem({ to, icon }) {
  return (
    <li className="w-full flex justify-center items-center rounded bg-white bg-opacity-0 hover:bg-opacity-10 sm:rounded-lg md:rounded-xl active:scale-95 transition-all ease-in-out duration-250">
      <Link
        className="px-4 py-2 flex justify-center items-center rounded sm:px-6 sm:py-3 md:px-8 md:py-4 sm:rounded-lg md:rounded-xl"
        to={to}
      >
        <i className={icon}></i>
      </Link>
    </li>
  );
}
