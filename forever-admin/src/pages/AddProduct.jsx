import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import toast from "react-hot-toast";
import { serverURL } from "../App";

const AddProduct = ({ token }) => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "Men",
    subCategory: "Topwear",
    sizes: [],
    bestseller: false,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const setProductValue = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setProductData({ ...productData, [name]: files[0] });
    } else if (type === "checkbox") {
      setProductData({ ...productData, [name]: checked });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const toggleSize = (size) => {
    setProductData((prevData) => {
      const sizes = prevData.sizes.includes(size)
        ? prevData.sizes.filter((s) => s !== size)
        : [...prevData.sizes, size];
      return { ...prevData, sizes };
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const appendData = new FormData();
      productData.image1 && appendData.append("image1", productData.image1);
      productData.image2 && appendData.append("image2", productData.image2);
      productData.image3 && appendData.append("image3", productData.image3);
      productData.image4 && appendData.append("image4", productData.image4);
      appendData.append("name", productData.name);
      appendData.append("description", productData.description);
      appendData.append("price", productData.price);
      appendData.append("category", productData.category);
      appendData.append("subCategory", productData.subCategory);
      appendData.append("bestseller", productData.bestseller);
      appendData.append("sizes", JSON.stringify(productData.sizes));

      const res = await axios.post(serverURL + "/add", appendData, {
        headers: { token },
      });

      if (res.data.success) {
        setProductData({
          price: 0,
          category: "Men",
          subCategory: "Topwear",
          sizes: [],
          bestseller: false,
          image1: null,
          image2: null,
          image3: null,
          image4: null,
        });
        toast.success(res.data.message);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <form
        onSubmit={handleAddProduct}
        className='flex flex-col w-full items-start gap-3'
      >
        <div>
          <p className='mb-2 font-medium text-sm'>Upload Images</p>

          <div className='flex gap-2'>
            {["image1", "image2", "image3", "image4"].map((image, index) => (
              <label key={index} htmlFor={image}>
                <img
                  className='w-20'
                  src={
                    productData[image]
                      ? URL.createObjectURL(productData[image])
                      : assets.upload_area
                  }
                  alt='upload area'
                />
                <input
                  name={image}
                  onChange={setProductValue}
                  type='file'
                  id={image}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>

        {/* ----input feilds------ */}

        <div className='w-full'>
          <p className='mb-2 font-medium text-sm'>Product Name</p>
          <input
            name='name'
            onChange={setProductValue}
            value={productData.name}
            className='w-full max-w-[500px] px-3 py-2'
            type='text'
            placeholder='Type here'
            required
          />
        </div>
        <div className='w-full'>
          <p className='mb-2 font-medium text-sm'>Product Description</p>
          <textarea
            name='description'
            onChange={setProductValue}
            value={productData.description}
            className='w-full max-w-[500px] px-3 py-2'
            type='text'
            placeholder='Write product description'
            required
          />
        </div>

        <div className='flex flex-col sm:flex-row sm:gap-6 gap-2 w-full'>
          <div>
            <p className='mb-2 font-medium text-sm'>Product Category</p>
            <select
              name='category'
              onChange={setProductValue}
              value={productData.category}
              className='w-full px-3 py-2'
            >
              <option value='Men'>Men</option>
              <option value='Women'>Women</option>
              <option value='Kids'>Kids</option>
            </select>
          </div>
          <div>
            <p className='mb-2 font-medium text-sm'>Product SubCategory</p>
            <select
              name='subCategory'
              onChange={setProductValue}
              value={productData.subCategory}
              className='w-full px-3 py-2'
            >
              <option value='Topwear'>Topwear</option>
              <option value='Bottomwear'>Bottomwear</option>
              <option value='Winterwear'>Winterwear</option>
            </select>
          </div>

          <div>
            <p className='mb-2 font-medium text-sm'>Product Price</p>

            <input
              name='price'
              onChange={setProductValue}
              value={productData.price}
              className='w-full max-w-[500px] px-3 py-2'
              type='number'
              placeholder='25SR'
              required
            />
          </div>
        </div>

        <div>
          <p className='mb-2 font-medium text-sm '>Product Sizes</p>

          <div className='flex gap-2.5'>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size}>
                <p
                  className={`cursor-pointer font-semibold bg-slate-200 py-1 px-3 ${
                    productData.sizes.includes(size)
                      ? " bg-orange-300 text-white"
                      : ""
                  }`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex gap-2 mt-2'>
          <input
            name='bestseller'
            onChange={setProductValue}
            value={productData.bestseller}
            type='checkbox'
            id='bestseller'
          />
          <label htmlFor='bestseller'>Add to bestseller</label>
        </div>

        <button
          className='uppercase bg-black text-white px-3 py-3 rounded'
          type='submit'
        >
          Add Product
        </button>
      </form>
    </main>
  );
};

export default AddProduct;
