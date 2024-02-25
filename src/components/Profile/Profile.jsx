import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Profile = () => {

  const infor = {
    username: 'Vietpro230',
    email: '123@gmail.com',
    firstName: 'Viet',
    lastName: 'Pro',
    birthday: '01/01/2000',
    address: 'Ha Noi',


  }

  
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState(infor.username);


  

  function handleEdit(event) {
    setUsername(event.target.value)
  }


  return (
    <div className=' h-screen text-center flex flex-col justify-center items-center '>

      <div className=' bg-gray-100 p-16 '>

        <div className='flex rounded-lg'>
          <div className='w-1/3 p-6'>
            <div className='flex justify-center items-center'>
              <img className='w-36 h-36 rounded-full' src='https://bootdey.com/img/Content/avatar/avatar7.png' alt="avatar" />
            </div>
            <div className=' flex justify-center items-center p-4'>
              <button className='bg-blue-500 text-white p-2 rounded-md'>Change</button>
            </div>

           <input type='text' value={username} onChange={handleEdit} className='w-full p-2 mb-4' disabled={!edit} />

          </div>

          <div className='w-96 mr-8' >

            <h1 className='text-2xl text-left mt-4 mb-2 '>Information</h1>
            <div className='border-b-2 border-gray-300 mb-8'></div>
            <div className='block '>
              <div className='flex mb-2'>
                <h1 className='text-xl '>Username:</h1>
                <h1 className='text-xl'>{infor.username}</h1>
              </div>

              <div className='flex mb-2'>
                <h1 className='text-xl '>Email:</h1>
                <h1 className='text-xl'>{infor.email}</h1>
              </div>

              <div className='flex mb-2'>
                <h1 className='text-xl '>First Name:</h1>
                <h1 className='text-xl'>{infor.firstName}</h1>
              </div>

              <div className='flex mb-2'>
                <h1 className='text-xl '>Last Name:</h1>
                <h1 className='text-xl'>{infor.lastName}</h1>
              </div>

              <div className='flex mb-2'>
                <h1 className='text-xl '>Birthday:</h1>
                <h1 className='text-xl'>{infor.birthday}</h1>
              </div>

              <div className='flex mb-2'>
                <h1 className='text-xl '>Address:</h1>
                <h1 className='text-xl'>{infor.address}</h1>
              </div>

              <div className='border-b-2 border-gray-300 mb-4 mt-4'></div>

              <div className='flex justify-end items-center  '>

                <div className='p-4'>
                  <button className='bg-blue-500 text-white p-2 rounded-md'
                    onClick={() => setEdit(!edit)}>{edit ? 'Save' : 'Edit'}</button>
                </div>

             

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;