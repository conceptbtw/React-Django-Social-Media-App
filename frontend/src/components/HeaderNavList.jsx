export default function HeaderNavList({ children }) {
  return (
    <ul className="flex justify-center items-center gap-2 text-xl sm:gap-3 md:gap-4 sm:text-2xl md:text-3xl">
      {children}
    </ul>
  );
}
