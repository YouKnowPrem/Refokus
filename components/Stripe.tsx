import React from 'react'
import Image from 'next/image'

function Stripe({val}: {val: any}) {
    return (
        <div 
            className='relative w-[70%] sm:w-[16.66%] sm:px-[1vw] 
            px-[4vw] py-[2vw] sm:py-[1vw] border-r-[1px] border-t-[1px]
            border-b-[1px] border-[#333] flex justify-between items-center'
        >
            <Image src={val.url} width={1000} height={100} alt="" className='w-[24vw] sm:w-[7vw] '/>
            <span className=' sm:text-[1vw] font-semibold'>{val.number}</span>
        </div>
    )
}

export default Stripe
