import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  function signUp(username, password, firstname, lastname, email, birthday) {
    if(username === '' || password === '' || firstname === '' || lastname === '' || email === '' || birthday === ''){
      alert('Please fill in all the fields')
      return
    }
    fetch('https://b1dm1kn2-3333.asse.devtunnels.ms/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        'username': username, 
        'password': password,
        'firstName': firstname,
        'lastName': lastname,
        'email': email,
        'birth': birthday
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if(data.message === 'Register successfully'){
        alert('Register successfully')
        navigate('/login')
      
        
      }
  
    })
    .catch(error => {
      console.error('Error:', error);
    });

    
  }
  return (
    <div className='container flex items-center justify-center min-h-screen w-full'>
      <div className='p-6 border bg-white rounded-lg w-full max-w-md text-center shadow-lg '>
        <div className='text-3xl font-bold mb-6'>Sign Up</div>
        <div className='border-b-2 border-gray-300 mb-8'></div>

        <div className='flex flex-col space-y-6'>

          <div className='flex items-center space-x-4'>
            <input
              className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-400'
              type='text'
              value={firstname} onChange={e => setFirstname(e.target.value)}
              placeholder='First Name'
            />

            <input
              className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-400'
              type='text'
              value={lastname} onChange={e => setLastname(e.target.value)}
              placeholder='Last Name'
            />
          </div>

          <div className='flex items-center space-x-4'>
            <input className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-400'
              type='email'
               value={email} onChange={e => setEmail(e.target.value)}
              placeholder='Email'
            />
          </div>


          <div className='flex items-center space-x-4'>
            <input
              className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-400'
              type='text'
              value={username} onChange={e => setUsername(e.target.value)}
              placeholder='Username'
            />
          </div>

          <div className='flex items-center space-x-4'>
            <input
              className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-400'
              type='password'
              value={password} onChange={e => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>



          <div className='flex items-center space-x-4'>
            <input className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-400'
              type='date'
              value={birthday} onChange={e => setBirthday(e.target.value)}
            />
          </div>



          <div className='flex mt-8 space-x-4 justify-center  '>
            <div className='rounded-md px-6 py-3 bg-blue-400 text-white cursor-pointer '
              onClick={() => signUp( username, password, firstname, lastname, email, birthday)}
            >
              Sign Up
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default SignUp