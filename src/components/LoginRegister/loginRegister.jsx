// In your React component
import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleLoginClick = () => {
    setIsRegistering(false);
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url(./assets/bg.jpeg)' }}>
      {/* Blurred Background Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50" /> */}

      {/* New Wrapper for Rounded Blur Effect */}
      <div className="relative bg-black   rounded-lg shadow-lg overflow-hidden">
        <div className="backdrop-blur-sm bg-black/30 p-10">
          {/* Content Container */}
          <div className="flex flex-col justify-center items-center">
            {/* Login Form */}
            {!isRegistering && (
              <form className="w-full">
                <h1 className="text-2xl text-center mb-4 text-white">Login</h1>
                <div className="relative w-full h-[45px] my-5">
                  <input 
                    type="text" 
                    placeholder="Username" 
                    required 
                    className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                  />
                  <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                </div>
                <div className="relative w-full h-[45px] my-5">
                  <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                  />
                  <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                </div>
                <div className="flex justify-between text-xs my-2">
                  <label className="flex items-center text-white">
                    <input type="checkbox" className="accent-white mr-1" /> Remember me?
                  </label>
                  <a href="#" className="hover:underline text-white">Forgot password?</a>
                </div>
                <button type="submit" className="w-full h-[40px] bg-white rounded-full shadow-md text-gray-800 font-bold">Login</button>
                <div className="text-xs text-center my-4 text-white">
                  <p>Don't have an account? <a href="#" onClick={handleRegisterClick} className="font-semibold hover:underline">Register</a></p>
                </div>
              </form>
            )}

            {/* Register Form */}
            {isRegistering && (
              <form className="w-full">
                <h1 className="text-2xl text-center mb-4 text-white">Register</h1>
                <div className="relative w-full h-[45px] my-5">
                  <input 
                    type="text" 
                    placeholder="Username" 
                    required 
                    className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                  />
                  <FaUser className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                </div>
                <div className="relative w-full h-[45px] my-5">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                  />
                  <MdEmail className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                </div>
                <div className="relative w-full h-[45px] my-5">
                  <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    className="w-full h-full bg-transparent border-2 border-opacity-10 border-white rounded-full text-white text-sm pl-4 pr-10 outline-none" 
                  />
                  <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-lg text-white" />
                </div>
                <div className="flex justify-between text-xs my-2">
                  <label className="flex items-center text-white">
                    <input type="checkbox" className="accent-white mr-1" /> I agree to the terms & conditions
                  </label>
                </div>
                <button type="submit" className="w-full h-[40px] bg-white rounded-full shadow-md text-gray-800 font-bold">Register</button>
                <div className="text-xs text-center my-4 text-white">
                  <p>Already have an account? <a href="#" onClick={handleLoginClick} className="font-semibold hover:underline">Login</a></p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
