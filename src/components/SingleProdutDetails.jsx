import React from "react";

const SingleProdutDetails = ({ title, price, sizes }) => {
  return (
    <div className="w-1/2">
      <div className="w-[40%] mx-40 mt-32">
        <h1 className="font-medium text-lg">{title}</h1>
        <h1 className=" font-bold text-sm mt-1">{price}</h1>
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
            <div className="w-fit mx-40 px-4 flex py-4 mt-4 border-gray-200 border rounded-md">
              {sizes.map((size, i) => (
                <h1
                  key={i}
                  className="cursor-pointer hover:bg-black hover:text-white rounded-md px-4 text-xs py-3"
                >
                  {size}
                </h1>
              ))}
            </div>
          </>
        )}

        <button className="w-[40%] mt-4 text-white text-lg mx-40 px-4 py-4 font-semibold border-none outline-none bg-black rounded-2xl">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default SingleProdutDetails;
