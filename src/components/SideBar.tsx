import twitterLogo from "../assets/logo-twitter.svg";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="p-6 px-5 flex flex-col gap-8 bg-black items-center md:w-48 sm:w-[60px]">
      <img
        src={twitterLogo}
        alt="Logo"
        className="w-8 h-8 mt-5 cursor-pointer"
      />
      <nav className="main-navigation flex flex-col gap-5">
        <NavLink
          to="/"
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <House className="w-8 h-8" />
          <span className="hidden lg:block">Home</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <Hash className="w-8 h-8" />
          <span className="hidden lg:block">Explore</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <Bell className="w-8 h-8" />
          <span className="hidden lg:block">Notifications</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <Envelope className="w-8 h-8" />
          <span className="hidden lg:block">Messages</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <BookmarkSimple className="w-8 h-8" />
          <span className="hidden lg:block">Bookmarks</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <FileText className="w-8 h-8" />
          <span className="hidden lg:block">Lists</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <User className="w-8 h-8" />
          <span className="hidden lg:block">Profile</span>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center gap-5 text-lg font-bold text-white no-underline"
        >
          <DotsThreeCircle className="w-8 h-8" />
          <span className="hidden lg:block">More</span>
        </NavLink>
      </nav>
      <NavLink to="/">
        <button
          type="button"
          className="bg-customBlue rounded-full p-4 flex justify-center items-center 
    h-[40px] sm:w-[40px] lg:w-60 text-[10px] md:w-[160px] text-white text-sm font-bold border-0 hover:brightness-90 relative"
        >
          <span className="hidden md:inline">Post</span>
          <Pencil className="ml-1 items-center absolute sm:inline hidden md:hidden" />
        </button>
      </NavLink>
    </aside>
  );
};

export default SideBar;
