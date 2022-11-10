import Image from 'next/image'
import bg from '@/images/bgcol.svg'
import holder from '@/images/holder.svg'
import { RiShieldCheckFill } from 'react-icons/ri'
import { IoCopyOutline } from 'react-icons/io5'
import { Disclosure, Listbox, Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GiCheckMark } from 'react-icons/gi'
import { useState } from 'react'
import { BsFillGrid3X3GapFill, BsFillGridFill } from 'react-icons/bs'
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md'
import { GoSettings } from 'react-icons/go'
import Card from '@/components/Collections/Card'

const Collection = () => {
  const [isGridShowMore, setIsGridShowMore] = useState(false)
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(true)

  const changeGridView = () => {
    setIsGridShowMore((prev) => !prev)
  }
  const handleFilterSidebar = () => {
    setIsFilterSidebarOpen((prev) => !prev)
  }

  const gridCount = () => {
    if (isFilterSidebarOpen && isGridShowMore) {
      // checking if sidebar is open and show more grid is true
      return 'md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-7'
    } else if (isFilterSidebarOpen && !isGridShowMore) {
      // checking if sidebar is open and show more grid is false
      return 'md:grid-cols-3 lg:grid-cols-4'
    } else if (!isFilterSidebarOpen && !isGridShowMore) {
      // checking if sidebar is not open and show more grid is false
      return 'md:grid-cols-3 lg:grid-cols-5'
    } else if (!isFilterSidebarOpen && isGridShowMore) {
      return 'md:grid-cols-6 lg:grid-cols-9'
    }
  }
  return (
    <main>
      <section className='mx-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl mt-10 px-5'>
        <div className='relative rounded-xl h-[150px] md:h-[180px] lg:h-[300px]'>
          <Image src={holder} className='w-full h-full object-cover rounded-xl' alt='Collection' />
        </div>
        <div className='border border-gray-20 rounded-xl w-20 h-20 md:w-40 md:h-40 ml-5 md:ml-10 -mt-14 md:-mt-28 relative z-20 bg-black-50'></div>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
          <article>
            <div className='flex space-x-2 items-center mb-3'>
              <h2 className='text-white text-lg md:text-4xl font-semibold'>NFT Name</h2>
              <RiShieldCheckFill className='text-blue-400 text-xl' />
            </div>
            <div>
              <p className='text-gray-400 text-sm'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat porro eaque
                possimus repellendus ipsa cupiditate unde? Deserunt autem quo sequi aut error
                explicabo, iste, rerum blanditiis consequatur molestiae possimus magni provident?
                Doloribus vitae aliquam eius similique praesentium voluptatibus magnam quas pariatur
                eaque! Et laboriosam sequi, quae deleniti aliquid ad necessitatibus!
              </p>
            </div>
          </article>
          <div className='w-full flex justify-end'>
            <div className='border border-gray-20 p-5 flex-shrink-0 w-full md:w-[300px] rounded-xl'>
              <div className='mb-3 border-b border-gray-20 pb-2'>
                <div className='flex justify-between text-gray-400 text-sm mb-3'>
                  <span>Floor Price</span>
                  <span>0.1 ETH</span>
                </div>
                <div className='flex justify-between text-gray-400 text-sm mb-3'>
                  <span>Volume</span>
                  <span>201 ETH</span>
                </div>
                <div className='flex justify-between text-gray-400 text-sm mb-3'>
                  <span>Items</span>
                  <span>10k</span>
                </div>
                <div className='flex justify-between text-gray-400 text-sm mb-3'>
                  <span>Owners</span>
                  <span>7.2k</span>
                </div>
              </div>
              <div>
                <div className='flex justify-between text-gray-400 text-sm mb-3'>
                  <span>Blockchain</span>
                  <span>Ethereum</span>
                </div>
                <div className='flex justify-between text-gray-400 text-sm mb-3'>
                  <span>Address</span>
                  <div className='flex space-x-2 items-center'>
                    <span>0xa12...d12a</span>
                    <button className='outline-none text-gray-400 hover:text-gray-500 transition duration-150'>
                      <IoCopyOutline />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='my-20'>
          <div>
            <Tab.Group>
              <Tab.List className='mb-10 border-b border-gray-20 flex space-x-10'>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected && 'border-b-2 border-white text-white'
                      } pb-3 px-4 text-gray-200 hover:text-gray-400 outline-none`}
                    >
                      Items
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected && 'border-b-2 border-white text-white'
                      } pb-3 px-4 text-gray-200 hover:text-gray-400 outline-none`}
                    >
                      Activity
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className='grid grid-cols-2 gap-2 md:gap-0 md:flex md:space-x-5'>
                    <button
                      className='bg-black-50 rounded-lg px-4 py-2 text-gray-200 flex space-x-2 items-center flex-shrink-0'
                      onClick={handleFilterSidebar}
                    >
                      {isFilterSidebarOpen ? (
                        <MdKeyboardArrowLeft className='text-xl' />
                      ) : (
                        <GoSettings className='text-xl' />
                      )}

                      <span>Filters</span>
                    </button>
                    <div className='col-span-2 order-1 md:order-none w-full'>
                      <div className='flex space-x-2 items-center px-4 py-3 bg-black-50 text-gray-200 rounded-lg'>
                        <FiSearch />
                        <input
                          type='text'
                          className='outline-none bg-transparent w-full'
                          placeholder='Search by NFT name'
                        />
                      </div>
                    </div>
                    <div className='flex space-x-2 p-2 bg-black-50 rounded-lg flex-shrink-0'>
                      <button
                        className={`px-4 py-2 rounded-lg ${
                          !isGridShowMore && 'bg-darkGray'
                        } outline-none text-gray-200 hover:text-white transition duration-150`}
                        onClick={changeGridView}
                      >
                        <BsFillGridFill />
                      </button>
                      <button
                        onClick={changeGridView}
                        className={`px-4 py-2 rounded-lg ${
                          isGridShowMore && 'bg-darkGray'
                        } outline-none text-gray-200 hover:text-white transition duration-150`}
                      >
                        <BsFillGrid3X3GapFill className='text-gray-200' />
                      </button>
                    </div>
                  </div>
                  <div className='mt-10 flex space-x-5'>
                    <div
                      className={`flex-shrink-0 min-w-[280px] max-w-[280px] relative ${
                        !isFilterSidebarOpen ? 'hidden' : 'hidden md:block'
                      }`}
                    >
                      <Disclosure as='div' className='relative mb-4'>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className='w-full flex justify-between border-b border-gray-20 pb-3'>
                              <span className='text-gray-200'>Price</span>
                              <MdOutlineKeyboardArrowDown
                                className={`${
                                  open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-gray-200 transition duration-200`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className='pt-5'>
                              <div className='grid grid-cols-5 items-center'>
                                <input
                                  type='text'
                                  className='outline-none bg-black-50 rounded-xl px-4 py-3 text-gray-200 col-span-2'
                                  placeholder='min'
                                />
                                <span className='text-gray-200 col-1 text-center'>to</span>
                                <input
                                  type='text'
                                  className='outline-none bg-black-50 rounded-xl px-4 py-3 text-gray-200 col-span-2'
                                  placeholder='max'
                                />
                              </div>
                              <button className='bg-black-50 hover:bg-black-50/50 rounded-xl text-gray-200 py-3 w-full mt-2 transition duration-150'>
                                Apply
                              </button>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure as='div' className='relative mb-4'>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className='w-full flex justify-between border-b border-gray-20 pb-3'>
                              <span className='text-gray-200'>Properties</span>
                              <MdOutlineKeyboardArrowDown
                                className={`${
                                  open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-gray-200 transition duration-200`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className='pt-5'>
                              <div className='flex justify-between'>
                                <span className='text-gray-200'>Eyes</span>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                    <div className={`w-full grid grid-cols-2 ${gridCount()} gap-4`}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                        <Card
                          width={'w-auto'}
                          image={holder}
                          showMore={isGridShowMore}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>NFT Activites</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Collection
