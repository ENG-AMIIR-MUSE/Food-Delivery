import React from 'react';

export default function Header() {
  return (
    <>
      <div className='container mx-auto p-4 fade-up'>
        <div className='max-h-[500px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center' data-aos="fade-up">
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              The <span className='text-orange-500'>Best</span>
            </h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
              <span className='text-orange-500'>Foods</span> Delivered
            </h1>
          </div>
          <img
            className='w-full max-h-[500px] object-cover'
            src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='/'
            data-aos="fade-in"
          />
        </div>
      </div>
    </>
  );
}
