import Image from 'next/image'
import React from 'react'
import logo from '../../images/logo.svg'
import { FiSearch } from 'react-icons/fi'
import { RiMenu5Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { useAppContext } from '../../context/context'
import MobileDropdown from './MobileDropdown'
import Search from '../Search/Search'
import Link from 'next/link'

const Navigation = () => {
  const { toggleMobileDropdown, isMobileDropdownOpen } = useAppContext()
  return (
    <>
      <nav className='mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-2 sm:py-5 px-4 sticky z-50 top-0 backdrop-blur-2xl bg-darkGray/90'>
        <div className='flex justify-between'>
          <Link href='/'>
            <Image src={logo} className='w-[50px]' alt='Nifty Logo' />
          </Link>
          <div className='flex items-center space-x-5 md:w-2/5'>
            <Search />
            <button className='hidden sm:flex rounded-full px-5 py-3 text-white bg-orange-20 text-sm flex-shrink-0'>
              Connect wallet
            </button>
          </div>
          <button
            className='sm:hidden bg-transparent border border-gray-20 text-white p-3 rounded-md outline-none'
            onClick={toggleMobileDropdown}
          >
            <RiMenu5Line className='text-lg' />
          </button>
        </div>
      </nav>
      <MobileDropdown
        toggleMobileDropdown={toggleMobileDropdown}
        isMobileDropdownOpen={isMobileDropdownOpen}
      />
    </>
  )
}

export default Navigation
