import { Image } from "phosphor-react";
import Tweet from "./Tweet";
import Header from "./Header";
import Separator from "./utils/Separator";
import { FormEvent, KeyboardEvent, useState } from "react";

const Main = () => {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "nmeu primeiro tweet",
    "teste",
    "deu certo",
  ]);

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();

    if (!newTweet) {
      alert("Escreva um tweet");
      return;
    }

    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  };

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter" && event.ctrlKey) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
  };

  return (
    <div className=" border-l border-r border-solid border-gray-800">
      <main className="">
        <Header
          foryouText="Foryou"
          followingText="Following"
          isStatusContext={false}
        />

        <form
          onSubmit={createNewTweet}
          action=""
          className="p-5 py-4 flex flex-col gap-[8px]"
        >
          <label htmlFor="" className="flex gap-[12px] items-center">
            <img
              src="https://github.com/Souzzagabe.png"
              alt="@Souzzagabe"
              className="w-12 rounded-full"
            />
            <textarea
              name=""
              id="tweet"
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewTweet(event.target.value);
              }}
              placeholder="Whats happening?!"
              className="flex-1 text-lg font-[500] rounded-xl focus:outline-none h-[10px] text-left px-3 
              bg-black border border-gray-300 mx-auto text-white placeholder-center md:h-14 sm:h-8"
            />
            <Image className="text-customBlue font-bold w-8 h-8 cursor-pointer" />
          </label>
          <button
            type="submit"
            className="bg-customBlue rounded-full p-3 py-1.5 flex justify-center items-center w-40 text-white text-lg font-bold border-0 hover:brightness-90 ml-auto sm:text-sm sm:w-40"
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
