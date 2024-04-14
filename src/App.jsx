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
import Revenue from './components/Revenue/Revenue'
import { createGlobalStyle } from 'styled-components';
import AddProduct from './components/AddProduct/AddProduct';
import Product from './components/Product/Product';

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
      <Router>
        <Routes>
          <Route path="/" element={<Admin/>} />
          <Route path="/dashboard" element={<Admin/>} />
          <Route path="/revenue" element={< Revenue/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Admin/>} />
          <Route path="/event" element={<Admin/>} />
          <Route path="/sales" element={<Admin/>} />
          <Route path="/accounts" element={<Admin/>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
