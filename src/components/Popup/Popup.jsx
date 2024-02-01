import React from 'react'
import { IoCloseOutline } from "react-icons/io5";


const Popup = ({ orderPopup, setOrderPopup }) => {
    return (
        <> {orderPopup &&
            <div
                className='popup'>
                <div className='h-screen w-screen fixed top-0
            left-0 bg-black/50 z-50 backdrop:-blur-sm'>
                    <div
                        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md
                bg-white dark:bg-gray-900 rounded-md duration-200 w-[600px]'>
                        {/* header */}
                        {/* header */}
                        <div className="flex items-center justify-between">
                            <div className='text-center w-full' > 
                                <h1 
                                className='text-xl font-bold mb-2' >
                                    Add Product</h1>
                            </div>
                            <div>
                                <IoCloseOutline
                                    className="text-2xl cursor-pointer "
                                    onClick={() => setOrderPopup(false)}
                                />
                            </div>
                        </div>
                        {/* form section */}
                        <div className="mt-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                            />
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Description
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                            />
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Image
                            </label>
                            <input
                                type='file'
                                placeholder="Image"


                            />
                            <div className="flex justify-center">
                                <button className="bg-blue-500 from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>}</>
    )
}

export default Popup
