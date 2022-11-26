import Image from 'next/image'
import nftbg from '@/images/grid/doddles.svg'
import meshbg from '@/images/grid/women.svg'
import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import { BiChevronDown, BiImageAdd } from 'react-icons/bi'
import { GiCheckMark } from 'react-icons/gi'

const networks = ['ethereum', 'polygon']
const index = () => {
  const [network, setSelectedNetwork] = useState(networks[0])
  const [isUploadImage, setIsUploadImage] = useState(false)

  return (
    <main className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl mt-5 lg:mt-20 py-20 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-start'>
        <div className=' flex flex-col space-y-3 md:space-y-4'>
          <h2 className='text-gray-400 uppercase text-xs'>Verify Your NFT</h2>
          <div className='flex space-x-2 md:space-x-10 items-center'>
            <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
              Moment
            </h2>
            <div className='bg-darkGray w-[100px] h-[40px] md:w-[100px] md:h-[40px] xl:w-[120px] xl:lg:h-[50px] 2xl:w-[145px] 2xl:h-[55px] rounded-full flex-shrink-0 relative'>
              <Image src={meshbg} className='object-cover w-full h-full rounded-full' alt='NFT' />
            </div>
            {/* <h2 className='text-2xl md:text-6xl 2xl:text-7xl text-white font-bold tracking-wider'>
              NFT
            </h2> */}
          </div>
          <div className='flex space-x-5 2xl:space-x-10 items-center'>
            <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
              Of
            </h2>
            <div className='bg-gray-300 w-[100px] h-[40px] md:w-[100px] md:h-[40px] xl:w-[120px] xl:lg:h-[50px] 2xl:w-[145px] 2xl:h-[55px] rounded-full flex-shrink-0 relative'>
              <Image src={nftbg} className='object-cover w-full h-full rounded-full' alt='NFT' />
            </div>
            <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
              Truth
            </h2>
          </div>
          <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
            Verify Now
          </h2>
        </div>
        <div className=' border border-gray-20 rounded-xl p-5'>
          <div className='mb-4'>
            <input
              type='text'
              className='border border-gray-20 bg-black-50 px-3 py-4 rounded-lg w-full outline-none text-gray-400 focus:border-gray-600'
              placeholder='Enter NFT contract address'
              name='address'
              id='address'
            />
          </div>
          <div className='mb-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
            <input
              type='text'
              className='border border-gray-20 bg-black-50 p-3 rounded-lg outline-none text-gray-400 focus:border-gray-600 col-auto md:col-span-2'
              placeholder='Enter NFT contract address'
              name='address'
              id='address'
            />
            <Listbox
              as='div'
              className='relative col-auto md:col-span-2'
              value={network}
              onChange={setSelectedNetwork}
            >
              {({ open }) => (
                <>
                  <Listbox.Button className='relative flex justify-between items-center bg-black-50 border border-gray-20 rounded-lg p-3 text-gray-400 w-full'>
                    <h6 className='text-xs text-gray-500 absolute top-1 left-[12px]'>Network</h6>
                    <p className='capitalize mt-2'>{network}</p>
                    <BiChevronDown className={open ? 'rotate-180' : 'rotate-0'} />
                  </Listbox.Button>
                  <Listbox.Options
                    as='div'
                    className='absolute top-16 bg-black-50 border border-gray-20 w-full h-28 rounded-md '
                  >
                    {networks.map((network, index) => (
                      <Listbox.Option
                        key={network}
                        value={network}
                        className={({ active }) =>
                          `relative cursor-pointer select-none list-none py-2 pl-10 pr-4 my-2 flex items-center ${
                            active ? 'bg-gray-700 text-gray-200' : 'text-gray-400'
                          }`
                        }
                      >
                        {({ selected }) => (
                          <>
                            {selected && (
                              <div className='absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600'>
                                <GiCheckMark className='text-lg' />
                              </div>
                            )}
                            <div className='capitalize'>
                              <span>{network}</span>
                            </div>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </>
              )}
            </Listbox>
            <button
              className='text-gray-400 bg-black-50 border border-gray-20 py-3 rounded-lg flex justify-center items-center'
              onClick={() => setIsUploadImage((prev) => !prev)}
            >
              <BiImageAdd className='text-2xl' />
            </button>
          </div>
          {isUploadImage && (
            <div className='bg-black-50 border border-gray-20 rounded-lg flex justify-center h-11 mb-4'></div>
          )}
          <button className='bg-gray-100 hover:bg-gray-300 font-semibold text-gray-800 py-3 w-full rounded-lg'>
            Search
          </button>
        </div>
      </div>
    </main>
  )
}

export default index
