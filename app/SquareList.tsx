import React from "react";
import img0 from "@/public/assets/images/7.jpg";
import img1 from "@/public/assets/images/2.jpg";
import img2 from "@/public/assets/images/3.jpg";
import img3 from "@/public/assets/images/4.jpg";
import Square, { ISquare } from "./Square";
import { StaticImageData } from "next/image";

interface IProps {
  currentData: { id: number; image: StaticImageData };
  changeImage: (currentData: { id: number; image: StaticImageData }) => void;
}
export default function SquareList({ currentData, changeImage }: IProps) {
  const product: ISquare[] = [
    {
      data: { id: 1, image: img0 },
      onClick: () => changeImage({ id: 1, image: img0 }),
    },
    {
      data: { id: 2, image: img1 },
      onClick: () => changeImage({ id: 2, image: img1 }),
    },
    {
      data: { id: 3, image: img2 },
      onClick: () => changeImage({ id: 3, image: img2 }),
    },
    {
      data: { id: 4, image: img3 },
      onClick: () => changeImage({ id: 4, image: img3 }),
    },
  ];

  return (
    <div className="max-w-[350px] flex gap-2 justify-between">
      {product.map((product) => {
        return (
          <div
            key={product.data.id}
            className={`${
              currentData.id == product.data.id
                ? "ring-2 ring-offset-2 ring-orange-500 rounded-xl transition-all duration-300"
                : ""
            }`}
          >
            <Square data={product.data} onClick={product.onClick} />
          </div>
        );
      })}
    </div>
  );
}
