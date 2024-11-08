import React, { memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AdminProductModal from "./AdminProductModal";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/modal";

const AdminProducts = memo(({ selectedNavbar, products }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
// console.log(products);

  return (
    <>
      <header className="p-4 bg-white border-[1px] mx-1 mt-1 rounded-lg border-gray-200">
        <div className="flex justify-between tracking-tight">
          <h1 className="text-2xl font-necto text-lightGrey">
            {selectedNavbar}
          </h1>
          <button
            className="text-sm px-4 font-necto rounded-lg bg-lightGrey"
            onClick={onOpen}
          >
            Add
          </button>
        </div>
      </header>
      {products.length != 0 && (
        <Table className="mx-auto w-10/12 bg-white pt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Dimensions</TableHead>
              <TableHead>Height</TableHead>
              <TableHead>Width</TableHead>
              <TableHead>Colors</TableHead>
              <TableHead>Main Image</TableHead>
              {/* <TableHead>Images</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  {product.productName}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  {product.dimension.map((item, index) => (
                    <TableRow key={index}>{item}</TableRow>
                  ))}
                </TableCell>
                <TableCell>
                  {product.height.map((item, index) => (
                    <TableRow key={index}>{item}</TableRow>
                  ))}
                </TableCell>

                <TableCell>
                  {product.width.map((item, index) => (
                    <TableRow key={index}>{item}</TableRow>
                  ))}
                </TableCell>
                <TableCell>
                  {product.colors.map((color, index) => (
                    <TableRow key={index}>{color}</TableRow>
                  ))}
                </TableCell>

                <TableCell>
                  <Image
                    src={product.mainImage}
                    alt={`${product.productName} image`}
                    width={124}
                    height={124}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <AdminProductModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
});

export default AdminProducts;