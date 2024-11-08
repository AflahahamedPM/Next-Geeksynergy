import React, { useState, memo, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SingleProdutDetails = memo(({ id, title, price, sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);
  const [sizeErr, setSizeErr] = useState(null);
  const { userId } = useAuth();
  const router = useRouter()

  useEffect(() => {
    if (userId) {
      const cartProducts =
        JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
      setCart(cartProducts);
    }
  }, []);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    !userId && router.push("/sign-in")
    
    const productId = id;
    const size = selectedSize;
    if (size === null) {
      setSizeErr("select a size");
      return;
    }

    const newCart = [...cart];

    const existingProductIndex = newCart.findIndex(
      (product) => product?.id === productId && product?.size === size
    );

    if (existingProductIndex > -1) {
      newCart[existingProductIndex].quantity += 1;
    } else {
      newCart.push({
        id: productId,
        title,
        price,
        size,
        quantity: 1,
      });
    }

    setCart(newCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(newCart));
  };

  return (
    <div className="w-1/2">
      <div className="w-[40%] mx-40 mt-32">
        <h1 className="font-medium text-lg">{title}</h1>
        <h1 className=" font-bold text-sm mt-1">US${price}</h1>
      </div>
      <div>
        {sizes && (
          <>
            <div className="w-5/12 mt-10 mx-40 flex justify-between">
              <h1 className=" text-gray-400 font-extralight text-xs">
                select size
              </h1>
              <h1 className="text-gray-400 font-extralight text-xs">
                size guide
              </h1>
            </div>
            <div className="w-fit mb-2 mx-40 px-4 flex py-4 mt-4 border-gray-200 border rounded-md">
              {sizes.map((size, i) => (
                <h1
                  key={size}
                  className={`${
                    selectedSize === size ? "bg-black text-white" : ""
                  } cursor-pointer hover:bg-black hover:text-white rounded-md px-4 text-xs py-3`}
                  name="size"
                  value={selectedSize}
                  onClick={(e) => setSelectedSize(e.target.innerHTML)}
                >
                  {size}
                </h1>
              ))}
            </div>
            {sizeErr && <h1 className="text-gray-400 mx-40">{sizeErr}</h1>}
          </>
        )}

        <button
          className="w-[40%] mt-4 text-white text-lg mx-40 px-4 py-4 font-semibold border-none outline-none bg-black rounded-2xl"
          onClick={(e) => handleAddToCart(e)}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
});

export default SingleProdutDetails;
