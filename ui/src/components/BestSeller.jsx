import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SectionTitle from "./SectionTitle";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    setBestSeller(products.filter((item) => item.bestseller).slice(0, 5));
  }, []);
  return (
    <section className='my-10'>
      <div className='text-center text-3xl py-8'>
        <SectionTitle title={"BEST"} subtitle={"SELLERS"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover the best-selling fashion pieces at Forever Clothes, featuring
          timeless styles loved by fashion enthusiasts everywhere.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item, i) => (
          <ProductItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
