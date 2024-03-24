import {
  FaInstagram,
  FaThreads,
  FaTiktok,
  FaTwitch,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProfileSection() {
  return (
    <section className="pb-4 w-full flex flex-col justify-center items-center gap-4 border-b border-white border-opacity-10">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Illia Movchko</span>
          <span className="">@conceptbtw</span>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-24 h-24 border rounded-full"
            src="/src/assets/images/profile.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex">
          <ul className="flex text-xl gap-4">
            <li className="">
              <a className="" href="" target="blank">
                <FaYoutube />
              </a>
            </li>
            <li className="">
              <a className="" href="" target="blank">
                <FaTwitch />
              </a>
            </li>
            <li className="">
              <a className="" href="" target="blank">
                <FaTiktok />
              </a>
            </li>
            <li className="">
              <a className="" href="" target="blank">
                <FaInstagram />
              </a>
            </li>
            <li className="">
              <a className="" href="" target="blank">
                <FaThreads />
              </a>
            </li>
            <li className="">
              <a className="" href="" target="blank">
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <span className="">
            Frontend Developer (React) from Lviv, Ukraine
          </span>
        </div>
        <div className="w-full flex gap-4">
          <Link className="hover:underline">100 followers</Link>
          <Link className="hover:underline">100 following</Link>
        </div>
        <div className="w-full">
          <Link className="p-2 flex justify-center items-center border border-white border-opacity-50 rounded bg-white bg-opacity-0 hover:bg-opacity-10 active:scale-95 transition-all ease-in-out duration-250">
            Edit profile
          </Link>
        </div>
      </div>
    </section>
  );
}
