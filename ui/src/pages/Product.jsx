import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { pId } = useParams();
  const navigate = useNavigate();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const [size, setSize] = useState("");
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === pId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [pId]);

  return productData ? (
    <main className='border-t-2  transition-opacity ease-in duration-500 opacity-100'>
      {/* --------product data---------- */}
      <div className='flex gap-12 sm:gap-12 flex-col mt-10 sm:flex-row'>
        {/* -------product images---------- */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, i) => (
              <img
                onClick={() => setImage(item)}
                key={i}
                src={item}
                alt=''
                className='w-[24%]  sm:w-full mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}
          </div>

          <div className='w-full sm:w-[8-%]'>
            <img className='w-full h-auto' src={image} alt='image' />
          </div>
        </div>

        {/* -----product informations------- */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_icon} alt='' className='w-3.5' />
            <img src={assets.star_dull_icon} alt='' className='w-3.5' />

            <p className='pl-2'>(132)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {productData.price}
            {currency}
          </p>
          <p className='mt-5 text-gray-500 w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  key={i}
                  className={`border py-2 px-4 bg-slate-100 ${
                    item === size ? "border border-orange-500 " : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(productData._id, size), navigate("/cart");
            }}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className=' text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Orginal product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Eassy retun and exchange policy within 7 days. </p>
          </div>
        </div>
      </div>

      {/* ------description & review secion-------- */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews (132)</p>
        </div>
        <div className='flex flex-col gap-4 border p-6 text-sm text-gray-500'>
          <p>
            {
              "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment."
            }
          </p>
          <p>
            {
              "The Nile Men's Round Neck T-shirt is crafted from 100% pure cotton, offering a soft, breathable texture that feels great on the skin. Its lightweight fabric ensures maximum comfort throughout the day, whether you're out and about or lounging at home. The classic round neck design adds a timeless touch, making it easy to pair with any outfit. Ideal for casual wear, this T-shirt strikes the perfect balance between comfort and style. Upgrade your everyday essentials with this versatile and reliable piece."
            }
          </p>
        </div>
      </div>

      {/* ------display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </main>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
