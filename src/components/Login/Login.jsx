
import React, { useState } from 'react';
import user_icon from '../../assets/Img/person.png';
import password_icon from '../../assets/Img/password.png';
import { useNavigate } from 'react-router-dom';





const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  function logIn(username, password) {

    // if (username === '' || password === '') {
    //   alert('Please fill in all the fields')
    //   return
    // }

    // fetch('https://b1dm1kn2-3333.asse.devtunnels.ms/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     'username': username,
    //     'password': password
    //   })
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     if (data.message === 'Login successfully') {
    //       console.log('login success')
    //       //how to navigate to another page
    //       navigate('/homepage')

    //     }

    //     else {
    //       alert('Wrong username or password')
    //     }

    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    // setIsLoggedIn(true)
    
    navigate('/homepage')

  }

  function signUp() {
   
    navigate('/signup')

  }



  return (
    <div className='container flex items-center justify-center min-h-screen w-full'>
      <div className='p-6 border bg-white rounded-lg w-full max-w-md text-center shadow-lg '>
        <div className='text-3xl font-bold mb-6'>Login</div>
        <div className='border-b-2 border-gray-300 mb-8'></div>

        <div className='flex flex-col space-y-6'>
          <div className='flex items-center space-x-4'>
            <img src={user_icon} alt='user icon' className='w-6 h-6' />
            <input
              className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-200'
              type='text' value={username} onChange={e => setUsername(e.target.value)}
              placeholder='Username'
            />
          </div>

          <div className='flex items-center space-x-4'>
            <img src={password_icon} alt='password icon' className='w-6 h-6' />
            <input
              className='border-b-2 border-gray-300 outline-none focus:border-blue-500 w-full text-lg py-2 placeholder-gray-200'
              type='password' value={password} onChange={e => setPassword(e.target.value)}
              placeholder='Password'
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  logIn(username, password);
                }
              }}
            />
          </div>
        </div>

        <div className='text-sm text-blue-200 cursor-pointer mt-4'>
          Forgot Password? <span className='text-blue-300'>Click here</span>
        </div>

        <div className='flex mt-8 space-x-4 justify-center  '>
          <div className='rounded-md px-6 py-3 bg-blue-400 text-white cursor-pointer '
            onClick={() => signUp()}
          >
            Sign Up
          </div>

          <button className='rounded-md	px-6 py-3 bg-gray-300 text-gray-700 cursor-pointer'
            onClick={() => logIn(username, password)}


          >Login</button>

        </div>
      </div>
    </div>
  );
};

export default Login;



