import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import SectionTitle from "../components/SectionTitle";
import ProductItem from "../components/ProductItem";

const Collections = () => {
  const { products, search, showSearch} =
    useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCaterogy] = useState([]);
  const [subCategory, setSubCaterogy] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCaterogy((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCaterogy((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCaterogy((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCaterogy((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductsCopy = products.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <main className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* ------------filret options----------- */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS{" "}
          <img
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt='dropdown icon'
          />
        </p>
        {/* -------category filter ------- */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
            showFilters ? "" : "hidden"
          }`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* -------subCategory----------- */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
            showFilters ? "" : "hidden"
          }`}
        >
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className='flex gap-2 '>
              <input
                className='w-3'
                type='checkbox'
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* ------------filter products----------- */}

      <div
        className='flex-1
      '
      >
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <SectionTitle title={"ALL"} subtitle={"COLLECTIONS"} />
          {/* -----product sort------- */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border border-gray-300 text-sm px-2'
          >
            <option value='relavent'>Relavent</option>
            <option value='low-high'>Low-High</option>
            <option value='high-low'>High-Low</option>
          </select>
        </div>

        {/* ---------Map products=---------- */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filterProducts.map((item, i) => (
            <ProductItem key={i} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Collections;
