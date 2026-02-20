import React from "react";
import {
  Power,
  Home,
  User,
  FolderKanban,
  ChartSpline,
  Settings,
} from "lucide-react";
const Sidebar = () => {
  return (
    <div className="h-[100vh] bg-[#111529] w-[17%] py-8 text-white px-3 flex flex-col justify-between">
      <div className="">
        <h1 className="text-3xl text-white font-bold pb-5 mb-5 border-b text-center border-[#3b3b3b]">
          AdminHub
        </h1>
        <ul className="">
          <li className="flex gap-4 items-center p-3 hover:bg-[#43434340] hover:border-l-[4px] duration-200">
            <span>
              <Home />
            </span>
            <span className="text-lg">Dashboard</span>
          </li>
          <li className="flex gap-4 items-center p-3 hover:bg-[#43434340] hover:border-l-[4px] duration-200">
            <span>
              <User />
            </span>
            <span className="text-lg">Users</span>
          </li>
          <li className="flex gap-4 items-center p-3 hover:bg-[#43434340] hover:border-l-[4px] duration-200">
            <span>
              <FolderKanban />
            </span>
            <span className="text-lg">Projects</span>
          </li>
          <li className="flex gap-4 items-center p-3 hover:bg-[#43434340] hover:border-l-[4px] duration-200">
            <span>
              <ChartSpline />
            </span>
            <span className="text-lg">Analytics</span>
          </li>
          <li className="flex gap-4 items-center p-3 hover:bg-[#43434340] hover:border-l-[4px] duration-200">
            <span>
              <Settings />
            </span>{" "}
            <span className="text-lg">Setting</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center p-5">
        <span>
          <Power />
        </span>{" "}
        <h2 className="text-xl">Logout</h2>
      </div>
    </div>
  );
};

export default Sidebar;
