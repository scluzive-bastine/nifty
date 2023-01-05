import Image, { StaticImageData } from 'next/image'

import { RiShieldCheckFill } from 'react-icons/ri'
import { convertStrAmountToNumber } from '@/utils/functions'
import holder from '@/images/holder.svg'

interface Props {
  width: String
  image: string | StaticImageData
  data: {
    collectionName: string
    collectionImageUrl: {
      cachedPathOriginSize: string
      cachedPathLarge: string
      width: number
      height: number
    }
    dailyTradingVolume: {
      amount: string
    }
    tradingVolume: {
      amount: string
    }
    oneDayAvgPrice: {
      amount: string
    }
    isVerified: boolean
  }
}

const Card = ({ width, data }: Props) => {
  return (
    <div className={`bg-darkGray p-3 border border-gray-20 rounded-xl ${width} flex-shrink-0`}>
      <div className='w-full relative'>
        <Image
          src={data.collectionImageUrl ? data.collectionImageUrl.cachedPathLarge : holder}
          width={data.collectionImageUrl ? data.collectionImageUrl.width : 280}
          height={data.collectionImageUrl ? data.collectionImageUrl.height : 280}
          className='w-full h-full object-cover rounded-xl'
          alt='Hape'
        />
      </div>
      <article className='mt-3'>
        <div className='flex space-x-2 items-center'>
          <h2 className='text-white text-lg font-semibold'>{data.collectionName}</h2>
          {data.isVerified && <RiShieldCheckFill className='text-blue-400' />}
        </div>
        <div className='flex space-x-3 md:space-x-5 mt-5'>
          <div>
            <p className='text-gray-400 uppercase text-[6px] md:text-[10px]'>Day Volume</p>
            <h3 className='text-gray-200 font-semibold text-sm md:text-lg'>
              {convertStrAmountToNumber(data.dailyTradingVolume.amount)} ETH
            </h3>
          </div>
          <div>
            <p className='text-gray-400 uppercase text-[6px] md:text-[10px]'>Trading Volume</p>
            <h3 className='text-gray-200 font-semibold text-sm md:text-lg'>
              {convertStrAmountToNumber(data.tradingVolume.amount)} ETH
            </h3>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Card
