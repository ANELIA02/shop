"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/assets/images/5.jpg";
import SquareList from "./SquareList";
import { StaticImageData } from "next/image";

export default function PreviewImage() {
  const [currentData, setCurrentData] = useState<{
    id: number;
    image: StaticImageData;
  }>({
    id: 0,
    image: img1,
  });

  const handleChangeImage = (data: { id: number; image: StaticImageData }) => {
    setCurrentData(data);
  };

  return (
    <div className="sm:h-[350px] sm:w-[350px] w-full ">
      <Image
        src={currentData.image}
        alt="paires"
        className="w-full h-full  sm:rounded-xl rounded-none "
      />
      <div className="sm:flex content-center m-2 mt-4">
        <SquareList currentData={currentData} changeImage={handleChangeImage} />
      </div>
    </div>
  );
}
