import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { Gear} from "phosphor-react";

function App() {
  return (
    <div className="m-auto max-w-[1000px] grid grid-cols-[300px,1fr] bg-black">
      <SideBar />
      <Main/>

    </div>
  );
}

export default App;
