import React from 'react'
import Image from 'next/image'
import img1 from '@/public/assets/images/5.jpg'
import SquareList from './SquareList'
import img2 from'@/public/assets/images/icon-minus.svg'
import img3 from'@/public/assets/images/icon-plus.svg'
import img4 from'@/public/assets/images/icon-cart.svg'
export default function () {
  return (
    <div className='flex justify-center sm:gap-20 sm:mt-10 max-w-2xl mx-auto border-2 border-yellow-500 flex-col sm:flex-row'>
        <div className='border-2 border-red-500 sm:h-[350px] sm:w-[350px] w-full '>
            <Image src={img1} alt='paires' className='w-full h-full rounded-xl'/>
           <div className='sm:flex hidden'><SquareList/></div>
            
        </div>
        <div className='border-2 border-green-500 sm:pt-20 sm:mt-0 mx-auto'>
           <p className='text-orange-500 font-bold text-xs'>SNEAKER COMPANY</p>
           <h1 className='font-bold text-3xl '>Fall Limited Edition <br />Sneakers</h1>
           <p className='mt-6'>These low-profile sneakers are your perfect casual wear <br />
           companion.Featuring a durable rubber outer sole,they'll <br /> Withstand everything the weather can ofer.</p>
           <div className='flex gap-6 mt-3'>
              <p>$125.00</p>
                 <button className='bg-orange-200 text-orange-500 text-bold-500 rounded-sm w-8 text-center'>50%</button>
           </div>
           <p className='line-through'>$250.00</p>
           <div className='sm:inline-flex gap-2 items-center sm:flex-row flex-col px-10 '>
           <div className="inline-flex items-center gap-5 rounded-md border border-gray-100 bg-gray-200 bg-opacity-50 px-3 py-2 w-full flex justify-center Pt-4">
           <Image src={img2} alt="iconmoins" className="w-2 h-1" />
           <button className='text-sm sm:w-[100px]'>0</button>
           <Image src={img3} alt="iconplus" className="w-2 h-2" />
           </div>
           <div className='flex gap-2 rounded-md border border-gray-100 bg-orange-500 px-5 py-2  w-full flex justify-center'>
           <Image src={img4} alt="iconcart" className="w-5 h-5 " />
           <button className='text-white sm:w-[100px]'>Add to cart</button>
           </div>
           </div>
      </div>
         </div>
  )
}
