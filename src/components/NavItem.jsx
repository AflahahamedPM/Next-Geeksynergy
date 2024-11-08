import Link from 'next/link'
import React, {memo} from 'react'

const NavItem = memo(() => {
  return (
    <nav className="flex gap-16 text-lg ml-20 font-semibold">
        <Link href="/products/all" className="cursor-pointer">All Products</Link>
        <Link href="/products/men" className="cursor-pointer">Men</Link>
        <Link href="/products/women" className="cursor-pointer">Women</Link>
        <Link href="/products/accessories" className="cursor-pointer">Accessories</Link>
        
    </nav>
  )
});

export default NavItem