"use client";
import React, { useEffect, useState, memo } from "react";
import NavComponent from "./NavComponent";
import { cardDetails } from "../constants/CardDetails";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

const CartContainer = memo(() => {
  const [productDetails, setProductDetails] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      const cartProducts =
        JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];

      const updatedProductDetails = cartProducts.map((cartProduct) => {
        const productDetail = cardDetails.find((p) => p.id === cartProduct.id);
        return {
          ...cartProduct,
          details: productDetail,
        };
      });
      setProductDetails(updatedProductDetails);
    }
  }, []);
  return (
    <>
      <NavComponent />
      <div className="mt-20">
        {productDetails.length == 0 ? (
          <div className="flex justify-center items-center mt-20 text-2xl font-light text-gray-400">
            <p>Cart Is Empty</p>
          </div>
        ) : (
          productDetails.map((product, i) => (
            <div
              key={i}
              className=" mb-5 w-8/12 mx-auto px-4 py-2 rounded-lg bg-gray-100 flex justify-between items-center"
            >
              <Image
                src={product?.details?.imageUrl}
                alt="product image"
                height={100}
                width={100}
                className="rounded-lg"
              />
              <h1>{product?.details?.title}</h1>
              <h1>{product?.details?.price}</h1>
              {product?.size ? <h1>{product?.size}</h1> : <h1>one size</h1>}
              <h1>{product?.quantity}</h1>
            </div>
          ))
        )}
      </div>
    </>
  );
});

export default CartContainer;
