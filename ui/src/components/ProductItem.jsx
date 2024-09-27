import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ _id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link onClick={()=>scrollTo(0,0)} to={`/product/${_id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out'
          src={image[0]}
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {price}
        {currency}
      </p>
    </Link>
  );
};

export default ProductItem;
