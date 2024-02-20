import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="m-auto max-w-[1000px] grid grid-cols-[300px,1fr] bg-black">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
