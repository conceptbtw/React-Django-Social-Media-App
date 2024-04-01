import HeaderNavList from "./HeaderNavList";
import HeaderNavItem from "./HeaderNavItem";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-center items-center text-white">
      <nav className="flex justify-center items-center">
        <HeaderNavList>
          <HeaderNavItem to="/" icon="fa-solid fa-house" />
          <HeaderNavItem to="/search" icon="fa-solid fa-magnifying-glass" />
          <HeaderNavItem to="/post" icon="fa-solid fa-pen" />
          <HeaderNavItem to="/notifications" icon="fa-solid fa-bell" />
          <HeaderNavItem to="/profile" icon="fa-solid fa-user" />
        </HeaderNavList>
      </nav>
    </header>
  );
}
