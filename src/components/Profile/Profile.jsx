import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const state = useNavigate()

  function handleBackToHome() {
    state('/homepage')
  }
  return (
    <div className=' h-screen text-center flex flex-col justify-center items-center '>

      <div className=' bg-red-100 p-16 '>
        <div className='mr-96 pb-8'>
          <button className='bg-blue-500 text-white p-2 rounded-md'
            onClick={() => handleBackToHome()}
          >Back to Home</button>
        </div>
        <div className='flex rounded-lg'>
          <div className='w-1/3 p-6'>
            <div className='flex justify-center items-center'>
              <img className='w-36 h-36 rounded-full' src='https://bootdey.com/img/Content/avatar/avatar7.png' alt="avatar" />
            </div>
            <div className=' flex justify-center items-center p-4'>
              <button className='bg-blue-500 text-white p-2 rounded-md'>Change</button>
            </div>

            <h1 className='text-2xl font'>Vietpro</h1>

          </div>

          <div className='w-96 mr-8' >

            <h1 className='text-2xl text-left mt-4 mb-2 '>Information</h1>
            <div className='border-b-2 border-gray-300 mb-8'></div>
            <div className='block'>
              <div className='flex'>
                <h1 className='text-xl '>Email:</h1>
                <h1 className='text-xl'>Hoangcongviet@gmail.com</h1>
              </div>

              <div className='border-b-2 border-gray-300 mb-4 mt-4'></div>
              <div className='flex'>
                <h1 className='text-xl'>Phone :</h1>
                <h1 className='text-xl'>0987654321</h1>
              </div>




              <div className='flex justify-center items-center pt-8 '>

                <div className='p-4'>
                  <button className='bg-blue-500 text-white p-2 rounded-md'>Edit</button>
                </div>

                <div className=''>
                  <button className='bg-blue-500 text-white p-2 rounded-md'>Save</button>
                </div>


              </div>







            </div>


          </div>


        </div>

      </div>
    </div>
  )
}

export default Profile