import React from "react";
import Image from "next/image";
import gymshark from "../../public/gymshark-icon.svg"
import NavItem from "./NavItem";
import SearchInput from "./SearchInput";
import Link from "next/link";

const NavComponent = () => {
  return (
    <header className="bg-white w-screen">
    <div className="flex fixed top-0 left-0 justify-between items-center w-full py-4 bg-white z-10">
      <Link href="/"><Image src={gymshark} alt="icon" className="w-10 h-10 ml-20" /></Link>
      <NavItem />
      <SearchInput />
    </div>
    </header>
  );
};

export default NavComponent;
