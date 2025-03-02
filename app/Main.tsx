import React from 'react'
import Image from 'next/image'
import img1 from '@/public/assets/images/5.jpg'
import SquareList from './SquareList'
import img2 from'@/public/assets/images/icon-minus.svg'
import img3 from'@/public/assets/images/icon-plus.svg'
import img4 from'@/public/assets/images/icon-cart.svg'
export default function () {
  return (
    <div className='flex justify-center sm:gap-20 sm:mt-10 max-w-screen-2xl mx-auto flex-col sm:flex-row'>
        <div className=' sm:h-[350px] sm:w-[350px] w-full '>
            <Image src={img1} alt='paires' className='w-full h-full  sm:rounded-xl rounded-none'/>
           <div className='sm:flex hidden'><SquareList/></div>
            
        </div>
        <div className=' pt-4 px-6 sm:pt-20 sm:mt-0 mx-auto'>
           <p className='text-orange-500 font-bold text-xs'>SNEAKER COMPANY</p>
           <h1 className='sm:font-bold text-3xl '>Fall Limited Edition <br />Sneakers</h1>
           <p className='text-base mt-6 sm:text-sm'>These low-profile sneakers are your perfect casual wear <br />
           companion.Featuring a durable rubber outer sole,they'll <br /> Withstand everything the weather can ofer.</p>
           <div className='flex justify-between align-items-center sm:flex-col'>
           <div className='flex gap-6 mt-3'>
              <p>$125.00</p>
                 <button className='bg-orange-200 text-orange-500 text-bold-500 rounded-sm w-8 text-center h-[20px]'>50%</button>
           </div>
           <p className='line-through pt-3 sm:pt-0'>$250.00</p>
           </div>
           <div className='sm:inline-flex gap-2 items-center sm:flex-row flex-col px-10 '>
           <div className="inline-flex items-center gap-20 sm:gap-5 rounded-md border border-gray-100 bg-gray-200 bg-opacity-50 px-3 py-2 w-full flex justify-center mt-8 sm:mt-0">
           <Image src={img2} alt="iconmoins" className="w-2 h-1" />
           <button className='text-sm  sm:w-[50px] h-8'>0</button>
           <Image src={img3} alt="iconplus" className="w-2 h-2" />
           </div>
           <div className='flex gap-2 rounded-md border border-gray-100 bg-orange-500 px-5 py-2  w-full flex justify-center mt-4 sm:mt-0'>
           <Image src={img4} alt="iconcart" className="w-5 h-5 " />
           <button className='text-white h-8 sm:w-[100px] h-8'>Add to cart</button>
           </div>
           </div>
      </div>
         </div>
  )
}
