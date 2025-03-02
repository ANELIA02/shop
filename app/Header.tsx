
import React from 'react'
import Image from "next/image";
import logo from '@/public/assets/images/logo.svg'
import cart from '@/public/assets/images/icon-cart.svg'
import avatar from '@/public/assets/images/8.jpg'

export default function Header() {
  return (
    <div className="px-56" >
    <header className="flex justify-between border-b-2 border-gray-200 ">
     <div className=" flex gap-8  items-start">
      <Image src={logo} alt="logo"/>
     <nav className="flex gap-4 text-gray-400">
      <a href="">Collections</a>
      <a href="">Men</a>
      <a href="">Women</a>
      <a href="">About</a>
      <a href="">Contact</a>
     </nav>
     </div>
     <div className=" flex gap-10">
     <Image src={cart} alt="cart"className="h-6 w-6"/>
     <Image src={avatar} alt="avatar" className="h-8 w-8"/>
     </div>

    </header>
    </div>
  )
}
