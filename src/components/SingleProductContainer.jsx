"use client";
import React, { useState, useEffect, memo } from "react";
import { useParams } from "next/navigation";
import { cardDetails } from "../constants/CardDetails";
import SingleProdutDetails from "../components/SingleProdutDetails";
import SingleProductImageContainer from "../components/SingleProductImageContainer";

const SingleProductContainer = memo(() => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const currentProduct = cardDetails.find((data) => data.id === id);
    setProduct(currentProduct);
  }, []);

  return (
    <>
      {product && (
        <>
          <div className="flex mt-28">
            <SingleProductImageContainer
              imageUrl={product.imageUrl}
              subImage1={product.subImage1}
              subImage2={product.subImage2}
            />
            <SingleProdutDetails
              id={product.id}
              title={product.title}
              price={product.price}
              sizes={product.sizes}
            />
          </div>
        </>
      )}
    </>
  );
});

export default SingleProductContainer;
