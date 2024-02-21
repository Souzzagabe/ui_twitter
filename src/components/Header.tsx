import { Gear } from "phosphor-react";

interface HeaderProps {
  foryouText: string;
  followingText?: string;
  isStatusContext?: boolean;
}

export default function Header({
  foryouText,
  followingText,
  isStatusContext,
}: HeaderProps) {
  
  return (
    <div
      className={`text-white py-6 px-5 flex items-center justify-between font-bold border-b border-solid border-gray-800 w-full h-16 ${
        isStatusContext ? "justify-between" : "justify-center"
      }`}
    >
      <div
        className={
          isStatusContext
            ? "text-left"
            : "flex gap-16 items-center justify-center mx-auto"
        }
      >
        <p className="text-xl cursor-pointer">{foryouText}</p>
        {followingText && (
          <p className="text-xl cursor-pointer ">{followingText}</p>
        )}
      </div>
      <Gear className="w-5 h-5 cursor-pointer" />
    </div>
  );
}
