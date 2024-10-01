import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverURL } from "../App";
import toast from "react-hot-toast";
import { assets } from "../assets/admin_assets/assets";

const OrdersProduct = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const res = await axios.get(serverURL + "/api/order/list", {
        headers: { token },
      });

      if (res.data.success) {
        setOrders(res.data.payload.reverse());
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleStatus = async (e, orderId) => {
    try {
      const res = await axios.put(
        serverURL + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );

      if (res.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <main>
      <h1>Order page</h1>

      <div>
        {orders.map((order, i) => (
          <div
            key={i}
            className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 '
          >
            <img className='w-12' src={assets.parcel_icon} alt='parcel icon' />
            <div>
              <div>
                {order.items.map((item, i) => {
                  if (i === order.items.length - 1) {
                    return (
                      <p className='py-0.5 text-orange-500' key={i}>
                        {item.name} x {item.quantity} <span>{item.size}</span>{" "}
                      </p>
                    );
                  } else {
                    return (
                      <p className='py-0.5 text-orange-500' key={i}>
                        {item.name} x {item.quantity} <span>{item.size}</span>,
                      </p>
                    );
                  }
                })}
              </div>
              <p className='mt-3 mb-2 font-medium'>
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","} </p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className='text-sm sm:text-[15px]'>
                Items: {order.items.length}
              </p>
              <p className='mt-3'>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Panding"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className='text-sm sm:text-[15px] '>{order.amount}SR</p>
            <select
              value={order.status}
              onChange={(e) => handleStatus(e, order._id)}
              className='p-2 font-semibold'
            >
              <option value='Order Placed'>Order Placed</option>
              <option value='Packing'>Packing</option>
              <option value='Shipped'>Shipped</option>
              <option value='Out for delivery'>Out for delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </main>
  );
};

export default OrdersProduct;
