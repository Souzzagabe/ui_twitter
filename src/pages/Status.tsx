import Header from "../components/Header";
import { Image } from "phosphor-react";
import Separator from "../components/utils/Separator";
import Tweet from "../components/Tweet";

const answers = ["concordo", "olha, faz sentido!", "parabéns"];

export function Status() {
  return (
    <main className="border-l border-r border-solid border-gray-800">
      <Header foryouText="Post" isStatusContext={true} />
      <Tweet
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis nobis sed suscipit similique error ratione inventore assumenda sit cupiditate. Porro temporibus itaque id ipsa. Quis eligendi debitis a neque?
"
      />
      <Separator />

      <form action="" className="p-5 py-4 flex flex-col gap-[8px]">
        <label htmlFor="" className="flex gap-[12px] items-center">
          <img
            src="https://github.com/Souzzagabe.png"
            alt="@Souzzagabe"
            className="w-12 rounded-full"
          />
          <textarea
            name=""
            id="tweet"
            placeholder="Post your reply"
            className="flex-1 text-lg font-[300] rounded-xl focus:outline-none h-8 text-left px-4 
              bg-black border border-gray-300 mx-auto"
          />
          <Image className="text-customBlue font-bold w-8 h-8 cursor-pointer" />
        </label>
        <button
          type="submit"
          className="bg-customBlue rounded-full p-3 py-1.5 flex justify-center items-center w-40 color
             text-white text-lg font-bold border-0 hover:brightness-90 h-[40px] ml-auto"
        >
          Reply
        </button>
      </form>
      <Separator />
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
