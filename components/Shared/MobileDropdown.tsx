import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import logo from '../../images/logo.svg'
import Search from '../Search/Search'

interface Props {
  isMobileDropdownOpen: boolean
  toggleMobileDropdown: () => void
}
const MobileDropdown = ({ isMobileDropdownOpen, toggleMobileDropdown }: Props) => {
  if (isMobileDropdownOpen) {
    return (
      <div className='fixed top-0 left-0 z-50 block h-screen w-full transition duration-150 ease-in-out bg-darkGray md:hidden'>
        <div className='flex justify-between py-2 px-4'>
          <Image src={logo} className='w-[50px]' alt='Nifty Logo' />
          <button
            className='sm:hidden bg-transparent border border-gray-20 text-white p-3 rounded-md outline-none'
            onClick={toggleMobileDropdown}
          >
            <IoClose className='text-lg' />
          </button>
        </div>
        <div className='mt-5 px-4'>
          <Search />
          <button className='rounded-full px-5 py-3 text-white bg-orange-20 text-sm flex-shrink-0 mt-4 w-full'>
            Connect wallet
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default MobileDropdown
