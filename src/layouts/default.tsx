import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export function Default() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen bg-black">
      <div className={`m-auto max-w-[1000px] grid ${windowWidth < 1200 ? 'grid-cols-[100px,1fr]' : 'grid-cols-[300px,1fr]'} bg-black`}>
        <SideBar />
        <Outlet/>
      </div>
    </div>
  );
}
