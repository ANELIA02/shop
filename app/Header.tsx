"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import cart from "@/public/assets/images/icon-cart.svg";
import avatar from "@/public/assets/images/8.jpg";
import { useStore } from "@/store";

export default function Header() {
  const { panier } = useStore();
  return (
    <div className="px-56 py-4">
      <header className="flex justify-between border-b-2 border-gray-200 ">
        <div className=" flex gap-8  items-start">
          <Image src={logo} alt="logo" />
          <nav className="flex gap-4 text-gray-400 group-hidden">
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </nav>
        </div>
        <div className="flex gap-10">
          <div className="relative">
            <Image src={cart} alt="cart" className="h-6 w-6" />
            <span className="absolute p-2 text-sm -top-2 -right-2 w-[20px] h-[20px] flex justify-center items-center rounded-full bg-orange-400 font-semibold">
              {panier.length}
            </span>
          </div>
          <Image src={avatar} alt="avatar" className="h-8 w-8" />
        </div>
      </header>
    </div>
  );
}
