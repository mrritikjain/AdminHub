import React from "react";
import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Projects from "./Pages/Projects";
import Analytics from "./Pages/Analytics";
import Settings from "./Pages/Settings";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
       <Route index element={<Dashboard />} />
       <Route path="/users" element ={<Users/>} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/analytics" element={<Analytics/>} />
       <Route path="/settings" element={<Settings />} />



       </Route>
    </Routes>
  );
};

export default App;
