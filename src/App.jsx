import React, { useEffect, useState } from 'react'
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from './components/Login/SignUp'
import AboutUS from './components/About-US/AboutUS'
import Login from './components/Login/Login'
import { createGlobalStyle } from 'styled-components';
import LayOut from './components/LayOut/LayOut'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';



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
  
  const [data, setData] = useState(null);
  function HomePage() {
    console.log("hahah")

    return (
      <>

        <Hero />

        <Products setData={setData}/>
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
          <Route path='/products' element={<LayOut><Products setData={setData} /></LayOut>} />
          <Route path='/profile' element={<LayOut><Profile/></LayOut>} />
          <Route path='/cart'  element={<LayOut><Cart Data={data} /></LayOut>} />
          <Route path='/product-details' element={<LayOut><ProductDetails /></LayOut>} />

     
        </Routes>

      </Router>

    
    </>
  )
}
export default App
