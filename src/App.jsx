import React from "react";
import './App.css'
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
