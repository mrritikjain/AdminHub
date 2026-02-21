import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
const MainLayout = () => {
  return (
    <div className="h-[100vh] bg-[#ebebeb] flex w-[100%]">
      <Sidebar />
      <div className="w-[83%] px-5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
