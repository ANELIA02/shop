"use client";
import React, { useState } from "react";
import Image from "next/image";
import img2 from "@/public/assets/images/icon-minus.svg";
import img3 from "@/public/assets/images/icon-plus.svg";
import img4 from "@/public/assets/images/icon-cart.svg";
import { useStore } from "@/store";
import { Article } from "@/type";

export default function DetailArticle() {
  const { addToPanier } = useStore();

  const article: Article = {
    id: 1,
    title: "Air Max",
    price: 250,
  };
  const reduction = 50 / 100;
  const [count, setCount] = useState<number>(1);
  const total = article.price * reduction * count;

  const handleChangeCount = (value: 1 | -1) => {
    setCount((state) => {
      const newValue = state + value;
      if (newValue == 0) {
        return 1;
      }
      return newValue;
    });

    /*
    count = 1,
    valeur = -1,
    state = 10 => 10+(-1) => 9
    */
  };
  return (
    <div className=" pt-4 px-6 sm:pt-20 sm:mt-0 mx-auto">
      <p className="text-orange-500 font-bold text-xs ">SNEAKER COMPANY</p>
      <h1 className="sm:font-bold text-3xl ">
        Fall Limited Edition <br />
        Sneakers
      </h1>
      <p className="text-base mt-6 sm:text-sm">
        These low-profile sneakers are your perfect casual wear <br />
        companion.Featuring a durable rubber outer sole,they&apos;ll <br />{" "}
        Withstand everything the weather can ofer.
      </p>
      <div className="flex justify-between align-items-center sm:flex-col">
        <div className="flex gap-6 mt-3">
          <p>${total.toFixed(2)}</p>
          <button className="bg-orange-200 text-orange-500 text-bold-500 rounded-sm w-8 text-center h-[20px]">
            {reduction * 100}%
          </button>
        </div>
        <p className="line-through pt-3 sm:pt-0">${article.price}</p>
      </div>
      <div className="sm:inline-flex gap-2 items-center sm:flex-row flex-col px-10">
        <div className="flex items-center gap-20 sm:gap-5 rounded-md border border-gray-100 bg-gray-200 bg-opacity-50 px-3 py-2 w-full  justify-center mt-8 sm:mt-0">
          <Image
            src={img2}
            alt="iconmoins"
            className="w-2 h-1"
            onClick={() => handleChangeCount(-1)}
          />
          <button className="text-sm  sm:w-[50px] h-8">{count}</button>
          <Image
            src={img3}
            alt="iconplus"
            className="w-2 h-2"
            onClick={() => handleChangeCount(1)}
          />
        </div>
        <div className="flex gap-2 rounded-md border border-gray-100 bg-orange-500 px-5 py-2  w-full justify-center mt-4 sm:mt-0">
          <Image src={img4} alt="iconcart" className="w-5 h-5 " />
          <button
            className="text-white sm:w-[100px] h-8"
            onClick={() =>
              addToPanier({
                id: article.id,
                title: article.title,
                price: article.price,
                count: count,
                total: total,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
