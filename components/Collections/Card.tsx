import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { RiShieldCheckFill } from 'react-icons/ri'

interface Props {
  width: String
  image: string | StaticImageData
  showMore: boolean
}

const Card = ({ width, image, showMore }: Props) => {
  return (
    <Link href={`/token/nft`}>
      <div className={`bg-darkGray p-3 border border-gray-20 rounded-xl ${width} flex-shrink-0`}>
        <div className='w-full relative'>
          <Image src={image} className='w-full h-full object-cover rounded-xl' alt='Hape' />
        </div>
        <article className='mt-3'>
          <div className='flex space-x-2 items-center'>
            <h2 className={`text-white ${showMore ? 'text-sm' : 'text-lg '} font-semibold`}>
              NFT Name
            </h2>
            <RiShieldCheckFill className='text-blue-400' />
          </div>
          {showMore && <h3 className='text-xs text-gray-400'>Price: 0.223 ETH</h3>}
          {!showMore ? (
            <div className='flex space-x-3 md:space-x-5 mt-5'>
              <div>
                <p className='text-gray-400 uppercase text-[6px] md:text-[10px]'>Day Volume</p>
                <h3 className='text-gray-200 font-semibold text-sm lg:text-lg'>234 ETH</h3>
              </div>
              <div>
                <p className='text-gray-400 uppercase text-[6px] md:text-[10px]'>Floor Price</p>
                <h3 className='text-gray-200 font-semibold text-sm lg:text-lg'>1.2 ETH</h3>
              </div>
            </div>
          ) : null}
        </article>
      </div>
    </Link>
  )
}

export default Card
