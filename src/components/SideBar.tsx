import twitterLogo from "../assets/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <aside
      className={`p-6 px-5 flex flex-col gap-8  items-center  lg:w-24${
        windowWidth < 1200 ? "w-16" : ""
      }`}
    >
      <img
        src={twitterLogo}
        alt="Logo"
        className="w-8 h-8 mt-5 cursor-pointer"
      />
      <nav className="main-navigation flex flex-col gap-5">
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <House
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "Home"}
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <Hash
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "Explore"}
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <Bell
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "Notifications"}
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <Envelope
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "Messages"}
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <BookmarkSimple
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "Bookmarks"}
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <FileText
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "Lists"}
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <User
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "Profile"}
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <DotsThreeCircle
            className={
              windowWidth < 1024 ? "w-8 h-8 lg:hidden" : "w-8 h-8 lg:block"
            }
          />
          {windowWidth >= 1200 && "More"}
        </NavLink>
      </nav>
      <button
        type="button"
        className={`bg-customBlue rounded-full p-4 flex justify-center items-center 
        ${
          windowWidth < 1200 ? "w-12 h-12 text-xs" : "w-60 h-[55px]"
        } text-white text-sm font-bold border-0 hover:brightness-90`}
      >
        Post
      </button>
    </aside>
  );
};

export default SideBar;
