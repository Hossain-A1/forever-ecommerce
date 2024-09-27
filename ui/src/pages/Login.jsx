import React, { useState } from "react";

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  const handleLoginSubmit =async( e)=>{
    e.preventDefault()

    
  }

  return (
    <form  onSubmit={handleLoginSubmit}   className='flex flex-col text-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {currState === "Sign Up" && (
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
        />
      )}

      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
      />
      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
      />

      <div className='w-full flex justify-between text-sm -mt-2'>
        <p className='cursor-pointer'>forgot your password</p>
        {currState === "Sign Up" ? (
          <p onClick={() => setCurrState("Login")} className='cursor-pointer'>
            Login here
          </p>
        ) : (
          <p onClick={() => setCurrState("Sign Up")} className='cursor-pointer'>
            Create account
          </p>
        )}
      </div>

      <button className='w-full px-3 font-light py-2 border bg-gray-800 text-white'>
        {currState === "Sign Up" ? "Sign up" : "Login"}
      </button>
    </form>
  );
};

export default Login;
