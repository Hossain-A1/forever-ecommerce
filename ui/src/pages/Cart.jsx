import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SectionTitle from "../components/SectionTitle";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems,products]);

  return (
    <main className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <SectionTitle title={"YOUR"} subtitle={"CART"} />
      </div>

      <div>
        {cartData.map((item, i) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={i}
              className='py-2 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6'>
                <img
                  className='16 sm:w-20'
                  src={productData.image[0]}
                  alt='image'
                />

                <div>
                  <p className='text-sm sm:text-lg font-medium'>
                    {productData.name}
                  </p>

                  <div className='flex items-center gap-5 mt-2'>
                    <p>
                      {productData.price}
                      {currency}
                    </p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type='number'
                min={i}
                defaultValue={item.quantity}
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className='w-4 sm:w-5 mr-4 cursor-pointer '
                src={assets.bin_icon}
                alt=''
              />
            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />

          <div className='w-full text-end'>
            <button
              onClick={() => navigate("/place-order")}
              className='text-sm bg-black text-white my-8 px-8 py-3'
            >
              PROCED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
