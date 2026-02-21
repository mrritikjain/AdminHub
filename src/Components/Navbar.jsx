import React from "react";
import { Bell, MessageSquare, CircleUser } from "lucide-react";
const Navbar = () => {
  return (
    <div className="pt-8 flex justify-between items-center mb-7">
      <div>
        <h1 className="text-3xl font-bold">Welcome, Ritik Jain.</h1>
      </div>
      <div className="flex justify-center items-center gap-5">
        <input
          type="text"
          name="Search"
          id="search"
          placeholder="Search here..."
          className="rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 border-1 border-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2  focus:outline-black-600"
        />
        <Bell className="hover:scale-90 duration-300" />
        <MessageSquare className="hover:scale-90 duration-300"/>
        <CircleUser className="hover:scale-90 duration-300"/>
      </div>
    </div>
  );
};

export default Navbar;
