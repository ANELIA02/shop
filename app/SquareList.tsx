import React from 'react'
import Image, { StaticImageData } from 'next/image'
import img0 from '@/public/assets/images/7.jpg'
import img1 from '@/public/assets/images/2.jpg'
import img2 from '@/public/assets/images/3.jpg'
import img3 from '@/public/assets/images/4.jpg'
import Square, { ISquare } from './Square'

export default function SquareList() {
    const product:ISquare[]=[
        {
            id:1,
            pathi:img0
        },
        {
            id:2,
            pathi:img1
        },
        {
            id:3,
            pathi:img2
        },
        {
            id:4,
            pathi:img3
        }
    ]
  return (
    <div className='w-[350px] flex  justify-between  mt-8'>
        {product.map((items)=> {
        return <div key={items.id}>
            <Square data={items}/>
        </div>
        }
        )}
    </div>
  )
}
