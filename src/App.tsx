import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import InformationBanner from "./Components/InformationBanner";
import FAQ from "./Pages/FAQ";
import {FooterOne} from "./Components/FooterOne";
import img1 from "./Assests/logo.webp";
import {Privacy} from "./Pages/Privacy";
import {Blog1} from "./Pages/Blogs/Blog1"
import Blog2 from "./Pages/Blogs/Blog2";
import {Blog3} from "./Pages/Blogs/Blog3";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <>
          <InformationBanner></InformationBanner>
        <NavBar></NavBar>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/faq" element={<FAQ/>} />
            <Route path="/privacy" element={<Privacy/>}></Route>
            <Route path="/blog/blog1" element={<Blog1/>}></Route>
            <Route path="/blog/blog2" element={<Blog2/>}></Route>
            <Route path="/blog/blog3" element={<Blog3/>}></Route>
        </Routes>
        <FooterOne></FooterOne>
          <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"

          />
          {/* Same as */}
          <ToastContainer/>
          <div className="whatsapp-btn-container">
              <a href="https://api.whatsapp.com/send?phone=918396952909&text=Hello%20VM4fitness%2C%0A%0AI%20need%20to%20lose%20weight.%20May%20I%20know%20about%20your%20Weightloss%20program%3F"
                 target="_blank" rel="noopener noreferrer" className="whatsapp-btn floating btn">
                  <img src={img1} alt="WhatsApp" className="img-logo"/>
              </a>
          </div>
      </>
  )
}

export default App;
