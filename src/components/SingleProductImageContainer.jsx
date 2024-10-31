import React from "react";
import Image from "next/image";

const SingleProductImageContainer = ({imageUrl, subImage1, subImage2}) => {
  return (
    <div className="w-1/2">
      <div className="flex gap-2">
        <Image
          src={imageUrl}
          className="w-[450px] h-[450px]"
          alt="mainImage"
        />
        <Image
          src={subImage1}
          className="w-[450px] h-[450px]"
          alt="subImage1"
        />
      </div>
      <div className="">
        <Image
          src={subImage2}
          className="w-[500px] h-[600px] ml-40 mt-2"
          alt="subImage2"
        />
      </div>
    </div>
  );
};

export default SingleProductImageContainer;
