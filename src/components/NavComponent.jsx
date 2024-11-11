import React, { memo } from "react";
import Image from "next/image";
import gymshark from "../../public/gymshark-icon.svg";
import NavItem from "./NavItem";
import CartButton from "./CartButton";
import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const NavComponent = memo(() => {
  const router = useRouter();

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
              <button
                className="px-2 py-2 rounded xl bg-gray-200 "
                onClick={() => {
                  router.push("/sign-in");
                }}
              >
                Sign In
              </button>
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
