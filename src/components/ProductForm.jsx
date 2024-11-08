import React, { memo, useRef } from "react";
// import CategoryInput from "./CategoryInput";

const ProductForm = memo(() => {

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER_LINK}/admin/product`,
//       {
//         method: "POST",
//         body: formData
//       }
//     );

//     const responsData = await response.json();
//     console.log(responsData);
//   };

  return (
    <form
    //   onSubmit={(e) => onSubmit(e)}
      encType="multipart/form-data"
      className="w-10/12 grid grid-cols-2"
    >
      <input
        type="text"
        placeholder="Product name"
        name="productName"
        className="w-9/12 ml-10 mb-4 py-2 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      {/* <CategoryInput /> */}
      <input
        type="text"
        placeholder="Product Description"
        name="description"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="text"
        placeholder="Product Detail"
        name="productDetail"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="text"
        placeholder="Product Dimesnion"
        name="dimension"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="text"
        placeholder="Product Height"
        name="height"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="text"
        placeholder="Product Width"
        name="width"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="text"
        placeholder="Product Depth"
        name="depth"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="text"
        placeholder="Product Material"
        name="materialOptions"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="text"
        placeholder="Product Color"
        name="color"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="file"
        placeholder="Product Main Image"
        name="mainImage"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
      />
      <input
        type="file"
        placeholder="Product Images"
        name="images"
        className=" w-9/12 ml-10 py-2 mb-4 px-2 focus:outline-none rounded-lg border border-gray-200"
        multiple
      />
      <div className="flex justify-end pt-10">
        <button type="submit" className="p-2 bg-darkGrey">
          Add Product
        </button>
      </div>
    </form>
  );
});

export default ProductForm;
