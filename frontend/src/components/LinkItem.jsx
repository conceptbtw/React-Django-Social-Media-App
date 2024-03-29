export default function LinkItem({ data }) {
  const icon = "fa-brands fa-youtube";
  const link = "https://www.youtube.com/@conceptbtw";

  return (
    <li className="">
      <a className="" href={link} target="blank">
        <i className={icon}></i>
      </a>
    </li>
  );
}
