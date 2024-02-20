import { Image } from "phosphor-react";
import Tweet from "./Tweet";
import Header from "./Header";
import Separator from "./utils/Separator";

const tweets = ["nmeu primeiro tweet", "teste", "deu certo"];

const Main = () => {
  return (
    <div className=" border-l border-r border-solid border-gray-800">
      <main className="">
        <Header foryouText="Foryou" followingText="Following" isStatusContext={false} />
        
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
              placeholder="Whats happening?!"
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
            Tweet
          </button>
        </form>
        <Separator />

        {tweets.map((tweet) => {
          return <Tweet key={tweet} content={tweet} />;
        })}
      </main>
    </div>
  );
};

export default Main;
