import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Project from "./components/projects/Project";
import GetTouch from "./components/contact/GetTouch";
import About from "./components/about/About";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<GetTouch />} />
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
