import React from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { BsBasket3Fill } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";






const AddProduct = () => {



    const [fileName, setFileName] = useState();

    const [product_name, setProductName] = useState('');
    const [product_description, setProductDescription] = useState('');
    const [product_image, setProductImage] = useState('');
    const [preview, setPreview] = useState();


    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    function outlineClick() {
        setActive(!active);
    }

    function clickNav(value) {
        navigate('/' + value);
    }


    const checkFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            // You now have the file
            console.log(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                //set size of image
                setFileName(file.name);
            };
            reader.readAsDataURL(file);
        }
    };

    function postButton(product_name, product_description, product_image) {
        fetch('http://13.229.127.197:3333/api/items/addItemaddItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'name': product_name,
                'description': product_description,
                'file': product_image
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                navigate('/products');
            })


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
                            className='rounded-full w-16 h-16 '
                            src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />

                        <div>
                            <h1 className='text-2xl font-bold text-blue-500'>Nguyen Van A</h1>
                            <p className='text-sm text-blue-500'>Viet@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-8 text-black'>
                    <form>
                        <div className='flex '>
                            <div className='mr-8'>
                                <div className='flex justify-center mt-8'>
                                    <div className='flex flex-col'>
                                        <label htmlFor='productname' className='text-xl'>Product Name</label>
                                        <input type='text' id='productname' className='border-2 border-black rounded-md px-4 py-2 mt-2 w-[500px] h-[60px]'
                                            value={product_name} onChange={(e) => setProductName(e.target.value)} />
                                    </div>
                                </div>



                                <div className='flex mt-8'>
                                    <div className='flex flex-col'>
                                        <label htmlFor='productdescription' className='text-xl'>Product Description</label>
                                        <input type='text' id='productdescription' className='border-2 border-black rounded-md px-4 py-2 mt-2 w-[500px] h-[260px]'
                                            value={product_description} onChange={(e) => setProductDescription(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className='flex justify-center mt-8'>
                                <div className='flex flex-col'>
                                    <label htmlFor='productimage' className='text-xl'>Product Image</label>
                                    <div className='border-2 border-black rounded-md px-4 py-2 mt-2 w-[500px] h-[388px]'>
                                        <div className='flex justify-center items-center h-full'>
                                            <div className='inline:block justify-center'>
                                                {!preview && (
                                                    <div>
                                                        <div>
                                                            <MdOutlineAddPhotoAlternate size={100} fill='#364A72' />
                                                        </div>
                                                        <div>

                                                            <div>
                                                                <input type='file' id='fileInput' className='hidden' onChange={checkFile}
                                                                />
                                                                <label htmlFor='fileInput' className='bg-[#364A72] text-white px-4 py-2 rounded-md mt-4 cursor-pointer'>
                                                                    Choose File
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {preview && (
                                                    <div className='inline '>

                                                        <div className='flex  '>
                                                            <div className=' w-full flex'>
                                                                <div className='flex items-center'>
                                                                    <span>{fileName}</span>
                                                                </div>

                                                                <div className='flex p-2 justify-end w-full'>
                                                                    <label htmlFor='fileInput' className='bg-[#364A72] text-white text-xl px-4 py-2 rounded-md mt-4 cursor-pointer'>
                                                                        Choose File
                                                                    </label>
                                                                </div>

                                                            </div>

                                                            <div className='pt-8'>
                                                                
                                                                    <input type='file' id='fileInput' className='hidden' onChange={checkFile} />
                                                                    {product_image && <img src={product_image} alt='Product'/>}
                                                                


                                                            </div>

                                                        </div>

                                                        <div>
                                                            <img src={preview} alt='Preview' className='w-full pb-8 h-80 object-cover'  />
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end mt-8   '>
                            <button className='bg-[#364A72] text-white px-4 py-2 rounded-md text-xl'
                                onClick={() => postButton(product_name, product_description, product_image)}
                            >
                                Post
                            </button>
                        </div>
                    </form>
                </div>


            </div>


        </div>
    )
}

export default AddProduct