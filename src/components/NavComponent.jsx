import React, { memo } from "react";
import Image from "next/image";
import gymshark from "../../public/gymshark-icon.svg";
import NavItem from "./NavItem";
import CartButton from "./CartButton";
import Link from "next/link";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

const NavComponent = memo(() => {
  return (
    <header className="bg-white w-screen">
      <div className="flex fixed top-0 left-0 justify-between items-center w-full py-4 bg-white z-10">
        <Link href="/">
          <Image src={gymshark} alt="icon" className="w-10 h-10 ml-20" />
        </Link>
        <NavItem />
        <div className="flex items-center">
          <CartButton />
          <div className="mr-10">
            <SignedOut>
              <SignInButton>
                <button className="px-2 py-2 rounded xl bg-gray-200 ">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
});

export default NavComponent;
