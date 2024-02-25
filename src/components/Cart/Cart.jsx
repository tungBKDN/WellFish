import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import Img1 from "../../assets/Hero/1.jpg";
import Img2 from "../../assets/Hero/2.jpg";
import Img3 from "../../assets/Hero/3.jpg";
import Img4 from "../../assets/Hero/1.jpg";
import { useState } from 'react';
import Products from '../Products/Products';




// const Data = [
//     {
//         id: 1,
//         img: Img1,
//         title: "Ethnic",
//         rating: 5.0,
//         color: "White",
//         quantity: 1,
//         aosDelay: "0",
//     },
//     {
//         id: 2,
//         img: Img2,
//         title: "western",
//         rating: 4.5,
//         color: "Red",
//         quantity: 1,
//         aosDelay: "200",
//     },
//     {
//         id: 3,
//         img: Img3,
//         title: "Goggles",
//         rating: 4.7,

//         color: "Brown",
//         quantity: 1,
//         aosDelay: "400",
//     },
//     {
//         id: 4,
//         img: Img4,
//         title: "Printed T-Shirt",
//         rating: 4.4,
//         color: "Yellow",
//         quantity: 1,
//         aosDelay: "600",
//     },

// ];


const Data = []




function Cart(props) {

   
   const handleClick = () => {
      
   }

   
    
    function checkout() {
        let total = 0;
        Data.map((item) => {
            total += item.quantity * 100;
        })
        console.log(total);

   
    }



    const [Quantity, setQuantity] = useState([]);

    function updateQuantity(type, id) {
       // console.log(type, id);
        if (type === '+') {
            setQuantity(Data.map((item) => {
                if (item.id === id) {
                    item.quantity += 1;

                }
            }));
        }
        else {
            setQuantity(Data.map((item) => {
                if (item.id === id) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    }
                }
            }));
        }
    }






    return (
        <>  
                <div>
                    <div className='bg-white'>
                        <div>
                            <div className='flex items-center justify-between bg-slate-300'>
                                <div className='m-4'>
                                    <h1 className='text-3xl font-bold mb-2 '>Shopping Cart</h1>
                                </div>
                         
                            </div>
                            {/* <div className='border-b-4 border-'>

                            </div> */}
                            <div className='m-6 '>
                                <table className='w-full  h-screen border-4'>
                                    <thead className='text-left text-xl  '>
                                        <tr>
                                            <th>Delete</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Data.map((item) => {
                                                return (
                                                    <tr>
                                                        <td><input type="checkbox" /></td>
                                                        <td className='flex items-center space-x-3'>
                                                            <img src={item.img} alt="product" className='w-20 h-20' />
                                                            <p>{item.title}</p>
                                                        </td>
                                                        <td>$100</td>
                                                        <td>
                                                            <div className='flex items-center space-x-3' key={item.id} >
                                                                <button onClick={() => updateQuantity('-', item.id)}>-</button>
                                                                <p>{item.quantity}</p>
                                                                <button onClick={() => updateQuantity('+', item.id)}>+</button>
                                                            </div>
                                                        </td>
                                                        <td>$100</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                        <tr>
                                            <td colSpan='5' >
                                                <div className='flex justify-between w-full'>
                                                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>Delete</button>
                                                    <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full'
                                                        onClick={() => handleClick()}>Checkout</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>     
                </div>
                
                
             
        </>
    )
}

export default Cart;
