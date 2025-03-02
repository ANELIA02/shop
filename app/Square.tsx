import React from 'react'
import Image, { StaticImageData } from 'next/image'
  export interface ISquare{
    data:{
        id:number;
        pathi:StaticImageData
    }
 }

export default function Square({data}:ISquare) {
  return (
    <div className=' w-20 h-20 rounded-xl overflow-hidden  relative bg-red-600 '>
        <Image src={data.pathi} alt='ko ' fill   />
    </div>
  )
}
