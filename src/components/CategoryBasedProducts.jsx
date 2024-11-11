"use client";
import React, { useEffect, useState, memo } from "react";
import { useParams } from "next/navigation";
import { cardDetails } from "../constants/CardDetails";
import CardComponent from "./CardComponent";
import SearchInput from "./SearchInput";
import SortComponent from "./SortComponent";

const CategoryBasedProducts = memo(() => {
  const { category } = useParams();
  const [products, setProducts] = useState(null);
  const [filterProducts, setFilterProducts] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isOpenSortDropdown, setIsOpenSortDropdown] = useState(false);

  useEffect(() => {
    if (category != "all") {
      const categoryProducts = cardDetails.filter(
        (card) => card.category.toUpperCase() === category.toUpperCase()
      );
      setProducts(categoryProducts);
      setFilterProducts(categoryProducts);
    } else {
      setProducts(cardDetails);
      setFilterProducts(cardDetails);
    }
  }, []);

  const handleSearch = () => {
    const filteredProducts = products.filter((card) =>
      card.title.toUpperCase().includes(inputValue.toUpperCase())
    );
    setFilterProducts(filteredProducts);
    setInputValue("");
  };

  const handleSort = (e) => {
    const sortOrder = e.target.innerHTML;
    let sortedProducts;

    if (sortOrder === "Low - High") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    }

    setFilterProducts(sortedProducts);
    setIsOpenSortDropdown(false);
  };

  return (
    <>
      <div className=" flex justify-between font-medium mt-40 w-10/12 mx-auto">
        <h1 className="text-2xl  uppercase">Category / {category}</h1>
        <div className="gap-4 flex items-center">
          <SearchInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSearch={handleSearch}
          />
          <SortComponent
            handleSort={handleSort}
            isOpenSortDropdown={isOpenSortDropdown}
            setIsOpenSortDropdown={setIsOpenSortDropdown}
          />
        </div>
      </div>
      <div className="grid grid-cols-3  gap-8 mt-10 mx-auto w-10/12 ">
        {products &&
          filterProducts.map((product) => (
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
});

export default CategoryBasedProducts;
