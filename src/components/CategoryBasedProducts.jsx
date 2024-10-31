"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { cardDetails } from "@/constants/CardDetails";
import CardComponent from "./CardComponent";

const CategoryBasedProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const categoryProducts = cardDetails.filter(
      (card) => card.category.toUpperCase() === category.toUpperCase()
    );
    setProducts(categoryProducts);
  }, []);

  return (
    <>
      <div className="text-2xl font-medium mt-40 w-10/12 mx-auto uppercase">
        <h1>Category / {category}</h1>
      </div>
      <div className="flex gap-8 mt-4 mx-auto w-10/12 ">
        {products &&
          products.map((product) => (
            <CardComponent
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              color={product.color}
              imageUrl={product.imageUrl}
              subImage1={product.subImage1}
            />
          ))}
      </div>
    </>
  );
};

export default CategoryBasedProducts;
