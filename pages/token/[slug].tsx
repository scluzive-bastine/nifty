import Image from 'next/image'
import React from 'react'
import holder from '@/images/holder.svg'

const Token = () => {
  return (
    <main className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl p-4 mt-20'>
      <section className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10'>
        <div className='col-auto md:col-span-3'>
          <div className='border border-gray-20 p-3 relative rounded-xl'>
            <Image
              src={holder}
              className='w-full h-full object-contain mx-auto rounded-xl'
              alt='NFT'
            />
          </div>
          <div className='mt-4'>
            <h2 className='text-white text-xl'>Description</h2>
            <p className='text-gray-400 text-sm mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perferendis alias
              doloribus modi deleniti illo? Placeat, eius ad, numquam officia excepturi accusantium
              deserunt, illum autem distinctio recusandae consequatur maxime earum! Molestiae magni
              maxime, harum aperiam corrupti temporibus deleniti velit aut?
            </p>
          </div>
        </div>
        <div className='col-auto md:col-span-2'>
          <div>
            <h2 className='text-white text-xl lg:text-2xl'>NFT Name</h2>
          </div>
          <div className='grid grid-cols-2 gap-2 lg:gap-5 mt-4'>
            <div className='border border-gray-20 p-2 lg:p-3 rounded-xl flex space-x-2 items-center'>
              <div className='h-5 w-5 lg:h-10 lg:w-10 bg-gradient-to-r from-teal-500 via-blue-500 to-blue-900  rounded-full flex-shrink-0'></div>
              <div>
                <h4 className='text-gray-400 text-xs lg:text-sm'>Creator</h4>
                <h2 className='text-white text-sm font-semibold'>0xa51...De87</h2>
              </div>
            </div>
            <div className='border border-gray-20 p-2 lg:p-3 rounded-xl flex space-x-2 items-center'>
              <div className='h-5 w-5 lg:h-10 lg:w-10 bg-gradient-to-r from-teal-500 via-blue-500 to-blue-900  rounded-full flex-shrink-0'></div>
              <div>
                <h4 className='text-gray-400 text-xs lg:text-sm'>Owner</h4>
                <h2 className='text-white text-sm font-semibold'>0xa51...De87</h2>
              </div>
            </div>
          </div>
          <div className='mt-4 border border-gray-20 rounded-xl p-3'>
            <div className='grid grid-cols-2 gap-2 lg:gap-5'>
              <div className='bg-black-50 p-3 rounded-xl'>
                <h4 className='text-gray-400 text-xs lg:text-sm'>Price</h4>
                <h2 className='text-white text-sm lg:text-xl font-semibold'>112.56 ETH</h2>
                <small className='text-gray-400'>$129,901</small>
              </div>
              <div className='bg-black-50 p-3 rounded-xl'>
                <h4 className='text-gray-400 text-xs lg:text-sm'>Highest Floor Price</h4>
                <h2 className='text-white text-sm lg:text-xl font-semibold'>112.56 ETH</h2>
                <small className='text-gray-400'>$129,901</small>
              </div>
            </div>
            <button className='w-full bg-gray-200 hover:bg-gray-300 transition duration-200 font-semibold text-black py-3 rounded-lg mt-3'>
              Buy Now!
            </button>
          </div>
          <div className='mt-10'>
            <h2 className='text-white text-xl lg:text-2xl'>Properties</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 mt-5'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                <div className='border border-gray-20 p-2 text-center rounded-xl' key={index}>
                  <h4 className='text-gray-400 text-xs'>Name</h4>
                  <h2 className='text-gray-200 text-sm lg:text-lg'>Property</h2>
                  <p className='text-gray-400 text-xs lg:text-sm'>Rarity: 20%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Token
