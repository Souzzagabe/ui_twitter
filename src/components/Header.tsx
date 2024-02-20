import { Gear } from "phosphor-react";

interface HeaderProps {
  foryouText: string;
  followingText: string;
}

export default function Header({ foryouText, followingText }: HeaderProps) {
  return (
    <div
      className="text-white py-6 px-5 flex items-center justify-between font-bold border-b border-solid border-gray-300 w-full h-16"
    >
      <div className="flex gap-20 items-center flex-1 justify-center">
        <p className="text-xl cursor-pointer">{foryouText}</p>
        <p className="text-xl cursor-pointer">{followingText}</p>
      </div>
      <Gear className="w-5 h-5 cursor-pointer" />
    </div>
  );
}
