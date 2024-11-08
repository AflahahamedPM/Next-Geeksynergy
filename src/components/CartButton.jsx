'use client'
import React, {memo} from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, } from '@clerk/nextjs'

const CartButton = memo(() => {
  const router = useRouter()
  const{userId} = useAuth()
  
  const handleCart = (e) =>{
    e.preventDefault()
    userId != null ? router.push("/cart") : router.push('/sign-in')
  }
  return (
    <div className="flex">
    <button className="px-4 py-1 text-lg rounded-lg flex justify-center items-center bg-gray-200 mr-20" onClick={(e)=>handleCart(e)}>
    cart
  </button>
  </div>
  )
});

export default CartButton;