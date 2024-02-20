import { Gear } from "phosphor-react";

const Header = () => {
  return (
    <div
      className="text-white py-6 px-5 flex items-center justify-evenly size-5 font-[700]
border-b border-solid border-gray-300 w-full h-16"
    >
      <div className="flex w-full justify-center gap-[200px]">
        <p className="size-5">Foryou</p>
        <p className="size-5">Following</p>
      </div>
      <Gear className="w-5 h-5 cursor-pointer" />
    </div>
  );
};

export default Header;
