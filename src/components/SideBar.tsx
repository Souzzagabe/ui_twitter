import twitterLogo from "../assets/logo-twitter.svg";
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from "phosphor-react";

const SideBar = () => {
  return (
    <aside className="p-py-6 px-5 flex flex-col gap-8">
    <img
      src={twitterLogo}
      alt="Logo"
      className="w-8 h-8 mt-5 cursor-pointer"
    />
    <nav className="main-navigation flex flex-col gap-8">
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
        <House className="w-8 h-8"/>
        Home
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
        <Hash className="w-8 h-8"/>
        Explore
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
        <Bell className="w-8 h-8"/>
        Notifications
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
        <Envelope className="w-8 h-8"/>
        Messages
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
        <BookmarkSimple className="w-8 h-8"/>
        Bookmarks
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
       <FileText className="w-8 h-8"/>
        Lists
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
        <User className="w-8 h-8"/>
        Profile
      </a>
      <a
        href=""
        className="flex items-center gap-5 text-lg font-bold text-white no-underline"
      >
        <DotsThreeCircle className="w-8 h-8"/>
        More
      </a>
    </nav>
    <button
      type="button"
      className="bg-customBlue rounded-full p-4 flex justify-center items-center w-60 color
    text-white text-lg font-bold border-0 hover:brightness-90 h-[55px]"
    >
      Post
    </button>
  </aside>
  )
}

export default SideBar