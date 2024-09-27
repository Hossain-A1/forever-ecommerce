import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import SectionTitle from "./SectionTitle";

const CartTotal = () => {
  const { getCartAmount, currency, delivery_fee } = useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <SectionTitle title={"CART"} subtitle={"TOTALS"} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>
            {getCartAmount()}.00{currency}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee:</p>
          <p>
            {delivery_fee}
            {currency}
          </p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Total</p>
          <b>
            {getCartAmount() === 0
              ? 0
              : getCartAmount() + delivery_fee + currency}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
