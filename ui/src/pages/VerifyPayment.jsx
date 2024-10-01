import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const VerifyPayment = () => {
  const { navigate, token, setCartItems, serverURL } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const handleVerifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const res = await axios.post(
        serverURL + "/api/order/verify-stripe",
        { success, orderId },
        { headers: { token } }
      );
    
      if (res.data.success) {
        setCartItems({});
        navigate("/orders");
      }else{
        navigate('/cart')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    handleVerifyPayment();
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-12 h-12 rounded-full border-2 border-gray-700">
        <div className="verify h-2 w-2 rounded-full border-none bg-red-700"></div>
      </div>
    </div>
  );
  
};

export default VerifyPayment;
