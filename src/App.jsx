import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import User from "./pages/User"
import Error from "./pages/Error"
import {BrowserRouter , Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
      
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/User" element={<User/>}/>
          <Route path="*" element={<Error/>}/>
        
        </Routes>
      </main>
      <Footer/>
      
      
      </BrowserRouter>
    </>
  );
};

export default App;