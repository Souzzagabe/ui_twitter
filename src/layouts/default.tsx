import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export function Default() {
  return (
    <div className="h-screen bg-black">
      <div className="m-auto max-w-[1000px] grid grid-cols-[300px,1fr] bg-black">
        <SideBar />
        <Outlet/>
      </div>
    </div>
  );
}
