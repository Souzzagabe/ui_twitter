import SideBar from "./components/SideBar";
import { Sparkle } from "phosphor-react";


function App() {
  return (
    <div className="m-auto max-w-[1000px] grid grid-cols-[300px,1fr] bg-black">
     <SideBar/>
      <div className=" border-l border-r border-solid border-gray-300">
        <main>
          <div className="text-white">
            Home
          </div>

          <form action=""></form>
        </main>
      </div>
    </div>
  );
}

export default App;
