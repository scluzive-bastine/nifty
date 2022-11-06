import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useAppContext } from '../../context/context'

const Search = () => {
  const { isMobileDropdownOpen } = useAppContext()
  return (
    <div
      className={`${
        isMobileDropdownOpen ? 'flex' : 'hidden sm:flex '
      } items-center justify-between px-4 space-x-2 border border-gray-20 rounded-full w-full`}
    >
      <input
        type='text'
        className='outline-none text-gray-400 bg-transparent px-2 py-3 text-sm w-full'
        name='search'
        id='search'
        placeholder='Search NFT'
      />
      <FiSearch className='text-gray-300 flex-shrink-0' />
    </div>
  )
}

export default Search
