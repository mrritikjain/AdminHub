import React from "react";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
const App = () => {
  return (
    <div className="h-[100vh] bg-[#ebebeb] flex w-[100%]">
     <Sidebar />
     <Main />
    </div>
  );
};

export default App;
