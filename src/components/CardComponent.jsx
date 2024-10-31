"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import Link from "next/link";

library.add(faHeartRegular, faHeartSolid);

const CardComponent = ({ id, title, price, color, imageUrl, subImage1 }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="w-[300px] h-[300px] shadow-lg text-left">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link href={`/product/${id}`}>
            <Image
              src={isHovered ? subImage1 : imageUrl}
              alt="popularDestination.img"
              width={400}
              height={700}
              className=" mx-auto my-2"
            />
          </Link>
          <div
            className="absolute w-8 h-8 bg-white top-2 right-2 max-sm:right-2 focus:outline-none rounded-lg cursor-pointer"
            onClick={() => handleLike()}
          >
            <FontAwesomeIcon
              icon={isLiked ? faHeartSolid : faHeartRegular}
              className={`mx-2 my-2  cursor-pointer ${
                isLiked ? "text-red-700" : "text-blue"
              }`}
            />
          </div>
        </div>
        <h1 className="text-sm ml-4 my-1 font-light cursor-pointer">{title}</h1>
        <p className="text-xs ml-4 mb-1 font-extralight text-gray-500">
          {color}
        </p>
        <p className="text-sm ml-4 font-semibold">{price}</p>
      </div>
    </>
  );
};

export default CardComponent;
