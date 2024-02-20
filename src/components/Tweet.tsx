import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";

const Tweet = () => {
  return (
    <a
      href="#"
      className="p-6 px-5 text-white grid grid-cols-[3rem,1fr] gap-3 border-b border-solid border-gray-300 no-underline"
    >
      <img
        src="https://github.com/Souzzagabe.png"
        alt="GS"
        className="w-12 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <strong>Gabriel Souza</strong>
          <span className="text-[0.875rem] text-slate-400 text-lg">
            @Souzzagabe
          </span>
        </div>
        <p className="leading-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          blanditiis suscipit mollitia, laudantium porro ipsum molestiae, atque,
          repudiandae minima accusamus culpa consequatur ratione odio voluptas
          earum labore ea quisquam reiciendis.
        </p>
        <div className="gap-12 flex items-center mt-3">
          <button
            type="button"
            className="flex items-center gap-0.5 bg-transparent border-0 text-[0.875rem] text-#89a2b9"
          >
            <span className="hover:text-blue-500">
              <ChatCircle className="w-5 h-5 mr-1" />
            </span>
            20
          </button>

          <button
            type="button"
            className="flex items-center gap-0.5 bg-transparent border-0 text-[0.875rem] text-#89a2b9"
          >
            <span className="hover:text-green-400">
              <ArrowsClockwise className="w-5 h-5 mr-1" />
            </span>
          </button>

          <button
            type="button"
            className="flex items-center gap-0.5 bg-transparent border-0 text-[0.875rem] text-#89a2b9"
          >
            <span className="hover:text-red-400">
              <Heart className="w-5 h-5 mr-1" />
            </span>
          </button>
        </div>
      </div>
    </a>
  );
};

export default Tweet;
