import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export function Default() {
  return (
    <div className="h-full min-h-screen bg-black">
      <div className="m-auto max-w-screen-lg grid md:grid-cols-[250px,1fr] sm:grid-cols-[60px,1fr] bg-black">
        <SideBar />
        <Outlet/>
      </div>
    </div>
  );
}

export default Default;
