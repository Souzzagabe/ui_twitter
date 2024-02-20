import { RouterProvider } from "react-router-dom";
import SideBar from "./components/SideBar";
import { router } from "./routers";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="m-auto max-w-[1000px] grid grid-cols-[300px,1fr] bg-black">
        <SideBar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
