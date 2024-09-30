import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SectionTitle from "../components/SectionTitle";
import axios from "axios";
import toast from "react-hot-toast";

const Orders = () => {
  const { serverURL, currency, token } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  const getAllOrdersData = async () => {
    try {
      if (!token) {
        return null;
      }

      const res = await axios.get(serverURL + "/api/order/user-orders", {
        headers: { token },
      });

      if (res.data.success) {
        let allOrderItems = [];
        res.data.payload.map((order) => {
          order.items.map((item) => {
            (item["status"] = order.status),
              (item["payment"] = order.payment),
              (item["paymentMethod"] = order.paymentMethod),
              (item["date"] = order.date),
              allOrderItems.push(item);
          });
        });
        console.log(allOrderItems);

        setProducts(allOrderItems.reverse());
      } else {
        toast.error("Somthing went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllOrdersData();
  }, []);
  return (
    <main className='border-t pt-16'>
      <div className='text-2xl'>
        <SectionTitle title={"MY"} subtitle={"ORDERS"} />
      </div>

      <div>
        {products.map((item, i) => (
          <div
            key={i}
            className='py-4 border-t text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image[0]} alt='imge' />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                  <p>
                    {item.price}
                    {currency}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size : {item.size}</p>
                </div>
                <p className='mt-1'>
                  Date :{" "}
                  <span className='text-gray-400'>
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className='mt-1'>
                  Payment :{" "}
                  <span className='text-gray-400'>{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:'>{item.status}</p>
              </div>
              <button onClick={getAllOrdersData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Orders;
