import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const Login = ({setToken}) => {
  const serverURL = "http://localhost:4000/api/user";
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(serverURL + "/admin", data);

      if (res.data.success) {
        setToken(res.data.payload)
        setData({
          email: "",
          password: "",
        });
        toast.success("Admin login was successfully");
      } else {
        toast.error("Admin login failed");

        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-semibold mb-4'>Admin Panel</h1>
        <form onSubmit={handleAdminLogin}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>
              Email Address
            </p>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='email'
              placeholder='admin@gamil.con'
              required
            />
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input
            value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='password'
              placeholder='Inter your password'
              required
            />
          </div>
          <button
            className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black shadow-md'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
