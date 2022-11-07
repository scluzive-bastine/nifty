import Image, { StaticImageData } from 'next/image'
import hape from '../../images/hape.svg'

import { RiShieldCheckFill } from 'react-icons/ri'

interface Props {
  width: String
  image: string | StaticImageData
}

const Card = ({ width, image }: Props) => {
  return (
    <div className={`bg-darkGray p-3 border border-gray-20 rounded-xl ${width} flex-shrink-0`}>
      <div className='w-full relative'>
        <Image src={image} className='w-full h-full object-cover rounded-xl' alt='Hape' />
      </div>
      <article className='mt-3'>
        <div className='flex space-x-2 items-center'>
          <h2 className='text-white text-lg font-semibold'>Hape Prime</h2>
          <RiShieldCheckFill className='text-blue-400' />
        </div>
        <div className='flex space-x-5 mt-5'>
          <div>
            <p className='text-gray-400 uppercase text-[10px]'>Day Volume</p>
            <h3 className='text-gray-200 font-semibold text-sm md:text-lg'>234 ETH</h3>
          </div>
          <div>
            <p className='text-gray-400 uppercase text-[10px]'>Floor Price</p>
            <h3 className='text-gray-200 font-semibold text-sm md:text-lg'>1.2 ETH</h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card
