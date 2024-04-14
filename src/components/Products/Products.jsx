// import React from 'react'
// import Img1 from "../../assets/Hero/1.jpg";
// import Img2 from "../../assets/Hero/2.jpg";
// import Img3 from "../../assets/Hero/3.jpg";
// import Img4 from "../../assets/Hero/1.jpg";
// import { FaStar } from "react-icons/fa6";
// import Navbar from '../Navbar/Navbar';




// const ProductsData = [
//   {
//     id: 1,
//     img: Img1,
//     title: "Ethnic",
//     rating: 5.0,
//     color: "White",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     img: Img2,
//     title: "western",
//     rating: 4.5,
//     color: "Red",
//     aosDelay: "200",
//   },
//   {
//     id: 3,
//     img: Img3,
//     title: "Goggles",
//     rating: 4.7,
//     color: "Brown",
//     aosDelay: "400",
//   },
//   {
//     id: 4,
//     img: Img4,
//     title: "Printed T-Shirt",
//     rating: 4.4,
//     color: "Yellow",
//     aosDelay: "600",
//   },
//   {
//     id: 5,
//     img: Img2,
//     title: "Fashin T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
// ];




// const data = [];

// const Products = (props) => { 

//   function addProductToCart(id, title, img, rating, color) {
//     data.push({id, title, img, rating, color});
//     props.onAddProductToCart(data);
//     console.log(data);
//     alert('Add to cart successfully');

//   }
//   return (
//     <div className='mt-14 mb-12'>
//       <div className='container' >
//         {/* header section */}
//         <div className='text-center mb-10 max-w-[600px] mx-auto'>
//           <p  data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
//           <h1 data-aos="fade-up"  className='text-3xl font-bold'>Products</h1>
//           <p className='text-xs text-gray-400'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Quisquam, laborum.
//           </p>
//         </div>
//         {/* body section */}
//         <div>
//           <div className='grid grid-cols-1 sm:grid-cols-3
//               md:grid-cols-4 lg:grid-cols-5 place-items-center'>
//             {/*card section*/}
//             {
//               ProductsData.map((item) => (
//                 <div
//                   data-aos="fade-up"
//                   data-aos-delay={item.aosDelay}
//                   key={item.id}
//                   className='space-y-3'
//                 >
//                   <img src={item.img} alt="" className='w-[150px] h-[200px]  object-cover rounded-md' />
//                   <div>
//                     <h3 className='font-semibold'>{item.title}</h3>
//                     <p className='text-sm text-gray-600'>{item.color}</p>
//                     <div className='flex items-center gap-1'>
//                       <FaStar className='text-yellow-400' />
//                       <span>{item.rating}</span>
//                     </div>

//                     <div>
//                       <button 
//                       onClick={() => addProductToCart(item.id, item.title, item.img, item.rating, item.color)}
//                       className='bg-primary text-xs px-5 py-2 rounded-md text-white cursor-pointer'>
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>


//               ))}
//           </div>

//           {/* view all button */}
//           <div className='text-center mt-10'>
//             <button className='bg-primary px-5 py-2 rounded-md text-white cursor-pointer'>
//               View All
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Products


import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { AiOutlineLeft } from "react-icons/ai";
import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import { FaSortAlphaDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useEffect } from 'react';


let listProduct = []

// fetch('http://13.229.127.197:3333/api/items/getVarietiesByItemID?itemID=1', {
await fetch('http://13.229.127.197:3333/api/items/getAllItems', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',

  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data_product => {
    data_product.data.map(item => item.image_source = 'data:image/png;base64,' + item.image_source.toString('base64'))

    listProduct.push(data_product)

  })
  .catch(error => {

    console.error('Error:', error);
  });





const Products = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const [txtSearch, setTxtSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(listProduct[0]?.data);
  }, [listProduct]);



  function outlineClick() {
    setActive(!active);
  }

  function clickNav(value) {
    navigate('/' + value);


  }

  function addProductButton() {
    navigate('/addproduct');
  }


  function editProfile() {
    console.log("edit");
  }


  function search(txtSearch) {
    const results = listProduct[0]?.data.filter((item) => item.name.toLowerCase().includes(txtSearch.toLowerCase()));
    setFilteredProducts(results);
  }





  return (
    <div className='flex  text-white overflow-y-hidden '>
      {!active && (<div className='bg-[#2B3F64] w-64 min-h-screen'>
        <AdminNavbar outlineClick={outlineClick} />
      </div>)}

      {
        active && (<div className='bg-[#2B3F64] w-16 min-h-screen'>
          <div className='block'>
            <div className='text-3xl font-bold flex justify-center  pt-4 pb-4 bg-[#364A72]'>
              <h1>W</h1>
            </div>

            <div className='ml-4 mt-4'>
              <ul className='hover:cursor-pointer'>
                <li className='mb-4' onClick={() => clickNav('dashboard')}>
                  <MdDashboard className='inline-block mr-2' size={24} />
                </li>
                <li className='mb-4' onClick={() => clickNav('revenue')}>
                  <FaDollarSign className='inline-block mr-2 mb-2' size={24} />
                </li>
                <li className='mb-4' onClick={() => clickNav('products')}>
                  <MdOutlineCategory className='inline-block mr-2 mb-2' size={24} />
                </li>
                <li className='mb-4' onClick={() => clickNav('orders')}>
                  <BsBasket3Fill className='inline-block mr-2 mb-2' size={24} />
                </li>
                <li className='mb-4' onClick={() => clickNav('event')}>
                  <MdEventAvailable className='inline-block mr-2 mb-2' size={24} />
                </li>
                <li className='mb-4' onClick={() => clickNav('sales')}>
                  <RiCoupon2Line className='inline-block mr-2 mb-2' size={24} />
                </li>
                <li className='mb-4' onClick={() => clickNav('accounts')}>
                  <MdAccountBox className='inline-block mr-2 mb-2' size={24} />
                </li>
              </ul>
            </div>
          </div>
        </div>)
      }



      <div className='inline:block w-screen  '>
        <div className=' bg-slate-200 flex' >
          <div>
            <button className='px-4 rounded-md h-full'>
              <IoMenu className='inline-block text-black'
                fontSize='2rem'
                onClick={() => outlineClick()}
              />
            </button>
          </div>

          <div className=' flex justify-end pb-1 mr-8 w-full'>

            <img
              className='rounded-full w-16 h-16 mr-2 '
              onClick={() => editProfile()}
              src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />

            <div>
              <h1 className='text-2xl font-bold text-blue-500'>Nguyen Van A</h1>
              <p className='text-sm text-blue-500'>Viet@gmail.com</p>
            </div>
          </div>
        </div>

        <div className='pl-8 pt-4 pr-8'>
          <div className='w-full text-black grid grid-cols-2'>

            <div className='flex'>
              <h1 className='font-bold text-4xl'>All product</h1>
              <div className='ml-8 flex'>

                <FaSortAlphaDown size={34} />

                <div className='block'>
                  <h1 className='text-xs font-bold'>Sort</h1>
                  <h1 className='text-sm'>Not specify</h1>
                </div>
              </div>
            </div>


            <div className='flex justify-end'>
              <input type="text" placeholder="Search" className='border-2 border-gray-300 rounded-full p-2 ml-8'
                value={txtSearch}
                onChange={(e) => setTxtSearch(e.target.value)} />
              <button className='bg-[#364A72] text-white px-4 py-2 rounded-md ml-2'
                onClick={() => search(txtSearch)}
              >Search</button>
            </div>
          </div>


          <div className='grid grid-cols-5 pt-8 gap-4'>
            {
        
              filteredProducts.map((item) => (
                <Product item={item} />
              ))
            }
          </div>


          <div className='flex justify-end mt-8 mr-8'>
            <button className='bg-[#364A72] text-white px-4 py-2 rounded-md text-xl'
              onClick={() => addProductButton()}
            >
              Add Product
            </button>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Products