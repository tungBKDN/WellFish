import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdHideImage } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";



// let listProduct = []

// fetch('http://13.229.127.197:3333/api/items/getVarietiesByItemID?itemID=1', {
// await fetch('http://13.229.127.197:3333/api/items/getAllItems', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',

//     }
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data_product => {
      
//         listProduct.push(data_product)
//     })
//     .catch(error => {

//         console.error('Error:', error);
//     });



// const img = listProduct[0].data[2].image_source
// const path = 'data:image/png;base64,' + img








const Product = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='relative'>
                {/* <img src="https://static.vinwonders.com/production/ca-bay-mau-2.jpg" */}

                    <img src={props.item.image_source}
                    className='rounded-2xl w-[250px] h-[250px]'></img>
                <div className='absolute  inset-0 flex items-end p-2'>
                    <div>
                        <p className='font-bold text-sm'>đ 15,000-27,000</p>
                        <h1 className='pb-4'>{props.item.name}</h1>

                        {isHovered &&
                            (
                                <div className='flex justify-center items-center text-center gap-x-4'>
                                    <div className=' bg-blue-500 text-sm w-16 h-16 rounded-full hover:cursor-pointer'>
                                        <div className=' flex justify-center items-center p-2'>
                                            <FaRegEdit size={16} />
                                        </div>

                                        <div>
                                            <h1>Edit</h1>
                                        </div>
                                    </div>

                                    <div className='block bg-gray-500 text-sm w-16 h-16 rounded-full hover:cursor-pointer'>
                                        <div className=' flex justify-center items-center p-2'>
                                            <MdHideImage size={16} />
                                        </div>

                                        <div>
                                            <h1>Hide</h1>
                                        </div>
                                    </div>

                                    <div className='block bg-red-500 text-sm w-16 h-16 rounded-full hover:cursor-pointer'>

                                        <div className=' flex justify-center items-center p-2'>
                                            <RiDeleteBin6Line size={16} />
                                        </div>

                                        <div>
                                            <h1>Delete</h1>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Product