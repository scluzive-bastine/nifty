import Networks from '@/components/Networks'
import Image from 'next/image'
import { RiShieldCheckFill } from 'react-icons/ri'

import holder from '@/images/holder.svg'
import Link from 'next/link'

const collections = () => {
  return (
    <>
      <header className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl mt-20'>
        <p className='text-gray-400 uppercase text-xs'>Collection Stats</p>
        <h2 className='text-2xl md:text-4xl font-semibold text-white'>Discover Collections</h2>
        <Networks />
      </header>

      <div className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl mt-20 px-5'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
          <h2 className='text-gray-400 uppercase text-xs col-auto md:col-span-2'>Collections</h2>
          <div className='hidden lg:grid grid-cols-6 gap-2 col-auto md:col-span-3'>
            <div className='text-gray-400 uppercase text-xs text-right'>Volume</div>
            <div className='text-gray-400 uppercase text-xs text-right'>Floor Price</div>
            <div className='text-gray-400 uppercase text-xs text-right'>% Change</div>
            <div className='text-gray-400 uppercase text-xs text-right'>24hrs Vol</div>
            <div className='text-gray-400 uppercase text-xs text-right'>7days Vol</div>
            <div className='text-gray-400 uppercase text-xs text-right'>Owners</div>
          </div>
        </div>
      </div>
      <section className='p-4 mx-auto max-w-screen-lg 2xl:max-w-screen-xl mt-5 border border-gray-20 rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-2'>
          <Link href='/collection/nft'>
            <div className='grid grid-cols-1 xl:grid-cols-5 gap-5 items-center mb-2 hover:bg-black-50/50 px-2 py-2 md:px-5 md:py-5 rounded-xl transition duration-200'>
              <div className='col-auto md:col-span-2'>
                <div className='flex space-x-2 items-center'>
                  <h2 className='text-white text-lg font-semibold'>NFT Collection</h2>
                  <RiShieldCheckFill className='text-blue-400' />
                </div>
                <div className='flex lg:hidden w-full mt-4'>
                  <div className='w-full'>
                    <h4 className='text-gray-400 text-xs'>Day Volume</h4>
                    <h4 className='text-white text-xl'>56.5 ETH</h4>
                  </div>
                  <div className='w-full'>
                    <h4 className='text-gray-400 text-xs'>Floor Price</h4>
                    <h4 className='text-white text-xl'>0.9 ETH</h4>
                  </div>
                </div>
                <div className='flex space-x-5 md:space-x-0 touch-pan-x snap-x snap-mandatory snap-center overflow-x-scroll scroll-smooth scrollbar-hide lg:grid lg:grid-cols-6 md:gap-2 mt-2'>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div
                      className='rounded-lg relative flex-shrink-0 max-w-[100px] max-h-[100px]'
                      key={index}
                    >
                      <Image
                        src={holder}
                        className='w-full h-full object-cover rounded-lg'
                        alt='Hape'
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-auto md:col-span-3 hidden lg:block'>
                <div className='grid grid-cols-6 gap-2'>
                  <div className='text-gray-200 uppercase text-lg text-right'>64 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>0.2 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>+12%</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>20 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>50 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>7,120</div>
                </div>
              </div>
            </div>
          </Link>
          <Link href='/collection/nft'>
            <div className='grid grid-cols-1 xl:grid-cols-5 gap-5 items-center mb-2 hover:bg-black-50/50 px-2 py-2 md:px-5 md:py-5 rounded-xl transition duration-200'>
              <div className='col-auto md:col-span-2'>
                <div className='flex space-x-2 items-center'>
                  <h2 className='text-white text-lg font-semibold'>NFT Collection</h2>
                  <RiShieldCheckFill className='text-blue-400' />
                </div>
                <div className='flex lg:hidden w-full mt-4'>
                  <div className='w-full'>
                    <h4 className='text-gray-400 text-xs'>Day Volume</h4>
                    <h4 className='text-white text-xl'>56.5 ETH</h4>
                  </div>
                  <div className='w-full'>
                    <h4 className='text-gray-400 text-xs'>Floor Price</h4>
                    <h4 className='text-white text-xl'>0.9 ETH</h4>
                  </div>
                </div>
                <div className='flex space-x-5 md:space-x-0 touch-pan-x snap-x snap-mandatory snap-center overflow-x-scroll scroll-smooth scrollbar-hide lg:grid lg:grid-cols-6 md:gap-2 mt-2'>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div
                      className='rounded-lg relative flex-shrink-0 max-w-[100px] max-h-[100px]'
                      key={index}
                    >
                      <Image
                        src={holder}
                        className='w-full h-full object-cover rounded-lg'
                        alt='Hape'
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-auto md:col-span-3 hidden lg:block'>
                <div className='grid grid-cols-6 gap-2'>
                  <div className='text-gray-200 uppercase text-lg text-right'>64 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>0.2 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>+12%</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>20 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>50 ETH</div>
                  <div className='text-gray-200 uppercase text-lg text-right'>7,120</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default collections
