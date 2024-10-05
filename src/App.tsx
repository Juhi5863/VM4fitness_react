import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import InformationBanner from "./Components/InformationBanner";

function App() {
  return (
      <>
          <InformationBanner></InformationBanner>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </>
  )
}

export default App;
