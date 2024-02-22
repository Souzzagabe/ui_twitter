import Header from "../components/Header";
import Separator from "../components/utils/Separator";
import Tweet from "../components/Tweet";
import { FormEvent, KeyboardEvent, useState } from "react";


export function Status() {

  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    "concordo", "olha, faz sentido!", "parabéns"
  ])

  const createNewAnswer = (event: FormEvent) => {
    event.preventDefault();

    if (!newAnswer) {
        alert("Escreva um tweet");
        return;
    }

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
};

const handleHotKeySubmit = (event: KeyboardEvent) => {
  if(event.key === 'Enter' && event.ctrlKey ) {
    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }
}


  return (
    <main className="border-l border-r border-solid border-gray-800">
      <Header foryouText="Post" isStatusContext={true} />
      <Tweet
        content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Culpa veritatis nobis sed suscipit similique error ratione inventore assumenda 
        sit cupiditate. Porro temporibus itaque id ipsa. Quis eligendi debitis a neque?
      " />
      <Separator />
      <form  onSubmit={createNewAnswer} action="" className="p-5 py-4 flex flex-col gap-[8px]">
        <label htmlFor="" className="flex gap-[12px] items-center">
          <img
            src="https://github.com/Souzzagabe.png"
            alt="@Souzzagabe"
            className="w-12 rounded-full"
          />
          <textarea
            name=""
            id="tweet"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            placeholder="Post your reply"
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            className="flex-1 text-lg font-[500] rounded-xl focus:outline-none h-14 text-left px-3 
            bg-black border border-gray-300 mx-auto text-white placeholder-center"
          />
        <button
          type="submit"
          className="bg-customBlue rounded-full p-3 py-1.5 flex justify-center items-center w-20 color
             text-white text-[15Ppx] font-bold border-0 hover:brightness-90 h-[38px] ml-auto"
        >
          Reply
        </button>
        </label>
      </form>
      <Separator />
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
