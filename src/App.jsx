import React, { useState } from 'react'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import Admin from './components/Admin/Admin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from './components/Login/SignUp'

import Login from './components/Login/Login'


import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #A9EDFF;
  }
`;








const App = () => {
  const [productData, setProductData] = useState(null);

  const handleProductData = (data) => {
    setProductData(data);
  };



  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  function HomePage(){
    return(
      <>
      <Navbar data={productData}  />
      <Hero />
      <Products onAddProductToCart={handleProductData} />
      </>
    )
  }

  

  return (
    <>
    
  
    <Admin />
 
    {/* <Admin /> */}
   {/* <SignUp/> */}


    </>
  )
}

export default App
