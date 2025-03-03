import React from "react";
import Image, { StaticImageData } from "next/image";

export interface ISquare {
  onClick: () => void;
  data: { id: number; image: StaticImageData };
}

export default function Square({ data, onClick }: ISquare) {
  return (
    <div
      key={data.id}
      className=" w-20 h-20 rounded-xl overflow-hidden hover:scale-95 transition-all relative bg-red-600 "
      onClick={onClick}
    >
      <Image src={data.image} alt="ko" fill />
    </div>
  );
}
