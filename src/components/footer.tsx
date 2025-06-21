import Image from 'next/image'
import React from 'react'

const footer = () => {
  return (
    <footer className='fixed z-50 bottom-0  flex justify-between items-center !w-full' >
        <div className='flex gap-10 pl-10 pt-16' >
            <Image
                src={"/images/telegram.svg"}
                alt='twitter icon'
                width={40}
                height={40}
                className='cursor-pointer hover:scale-90 duration-500 '
            />

             <Image
                src={"/images/facebook.svg"}
                alt='twitter icon'
                width={40}
                height={40}
                className='cursor-pointer hover:scale-90 duration-500 '
            />
            <Image
                src={"/images/instagram.svg"}
                alt='twitter icon'
                width={40}
                height={40}
                className='cursor-pointer hover:scale-90 duration-500 '
            />
        </div>
        <div className='relative -mb-12 -mr-6 ' >
            <Image
                src="/images/more_collection.svg"
                alt="Fluffy Hugs Footer"
                width={250}
                height={250}
                className="cursor-pointer"
            />
            <p className='text-[11px] tracking-normal absolute !text-white top-[50%] right-[30%] !font-[400] ' >VIEW COLLECTION</p>
        </div>
    </footer>
  )
}

export default footer
