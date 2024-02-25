import React, { useState } from 'react'
import Img1 from "../../assets/Hero/1.jpg";
import Img2 from "../../assets/Hero/2.jpg";
import Img3 from "../../assets/Hero/3.jpg";
import Img4 from "../../assets/Hero/1.jpg";
import { FaStar } from "react-icons/fa6";
import Navbar from '../Navbar/Navbar';
import Popup from '../Popup/Popup';
import Cart from '../Cart/Cart';
import { useNavigate } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';



const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];




const data = [];
const Products = (props) => { 
  const navigate = useNavigate();
  const [item , setItem] = useState(null);

  function addProductToCart(id, title, img, rating, color) {
    data.push({id, title, img, rating, color});
   
    props.setData(data);
    alert('Add to cart successfully');
  }

  function productDetails(items) {
    navigate('/product-details');
    setItem(items);

  }


  function getItem(){
    return item;
  }



  return (


 
    <div className='mt-14 mb-12 '>
      <div className='container' >
       
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p  data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
          <h1 data-aos="fade-up"  className='text-3xl font-bold'>Products</h1>
          <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, laborum.
          </p>
        </div>
 
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3
              md:grid-cols-4 lg:grid-cols-5 place-items-center'>
            
            {
              ProductsData.map((item) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay}
                  key={item.id}
                  className='space-y-3'
                >
                  <img src={item.img} alt="" className='w-[150px] h-[200px]  object-cover rounded-md cursor-pointer'
                  onClick={() => productDetails(item)}
                   />
                  <div>
                    <h3 className='font-semibold'>{item.title}</h3>
                    <p className='text-sm text-gray-600'>{item.color}</p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400' />
                      <span>{item.rating}</span>
                    </div>

                    <div>
                      <button 
                      onClick={() => addProductToCart(item.id, item.title, item.img, item.rating, item.color) }
                      className='bg-primary text-xs px-5 py-2 rounded-md text-white cursor-pointer'>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>


              ))}
          </div>

         
          <div className='text-center mt-10'>
            <button className='bg-primary px-5 py-2 rounded-md text-white cursor-pointer'>
              View All
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Products
