import React, { useEffect, useState } from 'react'
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import Admin from './components/Admin/Admin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from './components/Login/SignUp'
import AboutUS from './components/About-US/AboutUS'
import Login from './components/Login/Login'
import { createGlobalStyle } from 'styled-components';
import LayOut from './components/LayOut/LayOut'
import Profile from './components/Profile/Profile'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #A9EDFF;
  }
`;



function App() {
  const [productData, setProductData] = useState(null);

  const handleProductData = (data) => {
    setProductData(data);
  };

  function HomePage() {

    return (
      <>

        <Hero />
        <Products handleProductData={handleProductData} />
      </>
    );
  }

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);



  return (
    <>
      <GlobalStyle />
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<LayOut><HomePage /></LayOut>} />
          <Route path="/about-us" element={<LayOut><AboutUS /></LayOut>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/products' element={<LayOut><Products /></LayOut>} />
          <Route path='/profile' element={<Profile />} /> 

        </Routes>

      </Router>

      
    </>
  )
}
export default App
