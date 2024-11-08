"use client";
import React, { memo, useCallback, useState } from "react";
// import MicrosoftIcon from "@mui/icons-material/Microsoft";
// import CategoryIcon from "@mui/icons-material/Category";
// import AdminDashboard from "@/components/AdminDashboard";
import AdminProducts from "./AdminProducts";
import { debounce } from "lodash";

const AdminHome = memo(() => {
  const [selectedNavbar, setSelectedNavbar] = useState("Dashboard");
  const [products, setProducts] = useState([]);

  const handleClick = useCallback(debounce(async (e) => {
    const clickedNav = e.target.innerHTML;
    setSelectedNavbar(clickedNav);

    if (clickedNav === "Products") {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_LINK}/admin/product`
      );
      const data = await response.json();
      // console.log(data);
      setProducts(data.data)
    }
  },400),[]);
  return (
    <div className="flex ">
      {/* <aside className="w-64 bg-darkGrey">
        <header className="p-6 border-b-[1px] border-myGrey">
          <h1 className="text-xl font-necto text-myGrey ml-6">Goldsworthy</h1>
        </header>
        <nav
          className="w-8/12 pt-6 mx-auto text-base text-myGrey"
          onClick={(e) => handleClick(e)}
        >
          {/* <div className="flex gap-2 pb-6 hover:text-white cursor-pointer">
            <MicrosoftIcon />
            <h1>Dashboard</h1>
          </div> */}
          {/* <div className="flex gap-2 pb-6 hover:text-white cursor-pointer">
            <CategoryIcon />
            <h1>Products</h1>
          </div>
        </nav> */}
   {/* </aside> */}
      <main className="w-full bg-gray-300 h-screen">
        {/* {selectedNavbar === "Dashboard" && (
          <AdminDashboard selectedNavbar={selectedNavbar} />
        )} */}
        
          <AdminProducts selectedNavbar={selectedNavbar} products={products}/>
        
      </main>
    </div>
  );
});

export default AdminHome;