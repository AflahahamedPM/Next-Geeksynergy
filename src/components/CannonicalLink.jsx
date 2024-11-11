"use client";
import React from "react";
import { useRouter } from "next/navigation";

const CannonicalLink = () => {
  const { pathname } = useRouter(); 
  console.log("Canonical Path: ", pathname); 
  
  const canonicalUrl = `https://next-geeksynergy.vercel.app${pathname}`;
  console.log("Canonical Link: ", canonicalUrl);
  
  return <link rel="canonical" href={canonicalUrl} />;
};

export default CannonicalLink;
