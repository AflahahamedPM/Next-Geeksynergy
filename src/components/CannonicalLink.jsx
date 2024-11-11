"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const CannonicalLink = () => {
  const pathname = usePathname();

  const canonicalUrl = `https://next-geeksynergy.vercel.app${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
};

export default CannonicalLink;
