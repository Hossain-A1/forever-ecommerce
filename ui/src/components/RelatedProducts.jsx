import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import SectionTitle from "./SectionTitle";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relProduct, setRelProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let copyProducts = products.slice();
      copyProducts = copyProducts.filter((item) => category === item.category);
      copyProducts = copyProducts.filter(
        (item) => subCategory === item.subCategory
      );
      setRelProduct(copyProducts);
    }
  }, [products]);
  return (
    <div className='my-24' onClick={() => scrollTo(0, 0)}>
      <div className='text-center text-3xl py-2'>
        <SectionTitle title={"RELATED"} subtitle={"PRODUCTS"} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {relProduct.map((product, i) => (
          <ProductItem key={i} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
