import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import nftbg from '../images/nft.svg'
import gridbg from '../images/gridbg.svg'

import meshbg from '../images/mesh.svg'
import punk from '../images/grid/punk.svg'
import women from '../images/grid/women.svg'
import hape from '../images/grid/hape.svg'
import mutant from '../images/grid/mutant.svg'
import otherdeed from '../images/grid/otherdeed.svg'
import doddles from '../images/grid/doddles.svg'
import land from '../images/grid/land.svg'
import cat from '../images/grid/cat.svg'
import clone from '../images/grid/clone.svg'
import meebit from '../images/grid/meebit.svg'
import n13 from '../images/grid/n13.svg'
import capsule from '../images/grid/capsule.svg'

const Home: NextPage = () => {
  return (
    <section className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl mt-28 px-4 xl:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'>
        <div className='col-auto lg:col-span-3'>
          <div className='flex flex-col space-y-3 md:space-y-4'>
            <div className='flex space-x-5 items-center'>
              <h2 className='text-4xl md:text-6xl 2xl:text-7xl text-white font-bold tracking-wider'>
                Discover
              </h2>
              <div className='bg-darkGray w-[100px] h-[40px] md:w-[100px] md:h-[40px] xl:w-[120px] xl:lg:h-[50px] 2xl:w-[145px] 2xl:h-[55px] rounded-full flex-shrink-0 relative'>
                <Image src={meshbg} className='object-cover w-full h-full rounded-full' alt='NFT' />
              </div>
              <h2 className='text-2xl md:text-6xl 2xl:text-7xl text-white font-bold tracking-wider'>
                NFT
              </h2>
            </div>
            <div className='flex space-x-5 2xl:space-x-10 items-center'>
              <h2 className='text-4xl md:text-6xl 2xl:text-7xl text-white font-bold tracking-wider'>
                And
              </h2>
              <h2 className='text-4xl md:text-6xl 2xl:text-7xl text-white font-bold tracking-wider'>
                Verify
              </h2>

              <div className='bg-gray-300 w-[100px] h-[40px] md:w-[100px] md:h-[40px] xl:w-[120px] xl:lg:h-[50px] 2xl:w-[145px] 2xl:h-[55px] rounded-full flex-shrink-0 relative'>
                <Image src={nftbg} className='object-cover w-full h-full rounded-full' alt='NFT' />
              </div>
            </div>
            <h2 className='text-4xl md:text-6xl 2xl:text-7xl text-white font-bold tracking-wider'>
              NFT
            </h2>
          </div>
          <div className='flex space-x-2 md:space-x-5 mt-10'>
            <button className='bg-orange-20 hover:bg-orange-20/80 text-white font-semibold rounded-full px-10 py-3 transition duration-150 ease-in-out'>
              Discover
            </button>
            <button className='bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full px-10 py-3 transition duration-150 ease-in-out'>
              Verify NFT
            </button>
          </div>
        </div>
        <div className='grid-animation relative col-auto lg:col-span-2'>
          <div className='grid grid-cols-4 gap-5'>
            <div className='grid-card' style={{ animationDelay: '214.286ms' }}>
              <Image
                src={meebit}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-lg 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '428.571ms' }}>
              <Image
                src={gridbg}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-lg 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card ' style={{ animationDelay: '641.857ms' }}>
              <Image
                src={meshbg}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-lg 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card !opacity-0 delay-[857.143ms]'>
              <Image
                src={hape}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '428.571ms' }}>
              <Image
                src={women}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '642.857ms' }}>
              <Image
                src={cat}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '857.143ms' }}>
              <Image
                src={punk}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '1071.43ms' }}>
              <Image
                src={clone}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '642.857ms' }}>
              <Image
                src={land}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '857.143ms' }}>
              <Image
                src={doddles}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '1071.43ms' }}>
              <Image
                src={otherdeed}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '1285.71ms' }}>
              <Image
                src={mutant}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card !opacity-0 delay-[857.143ms]'>
              <Image
                src={meebit}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '1071.43ms' }}>
              <Image
                src={hape}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '1285.71ms' }}>
              <Image
                src={n13}
                className='object-cover w-4/5 h-4/5 rounded-lg md:rounded-2xl xl:rounded-xl 2xl:rounded-2xl'
                alt='NFT'
              />
            </div>
            <div className='grid-card' style={{ animationDelay: '1500' }}>
              <Image src={capsule} className='object-cover w-4/5 h-4/5 rounded-2xl' alt='NFT' />
            </div>
          </div>
          <div className='grid-lines absolute top-0 left-0 w-full h-full flex rotate-[180deg]'>
            <span className='w-[1px] h-full absolute top-0 left-[calc(25%-20px/4)] bg-[#23212C]'></span>
            <span className='w-[1px] h-full absolute top-0 left-1/2 bg-[#23212C]'></span>
            <span className='w-[1px] h-full absolute top-0 right-[calc(25%-20px/4)] bg-[#23212C]'></span>
          </div>
          <div className='grid-lines absolute top-0 left-0 w-full h-full'>
            <span className='w-full h-[1px] absolute top-[calc(25%-20px/4)] bg-[#23212C]'></span>
            <span className='w-full h-[1px] absolute top-1/2 bg-[#23212C]'></span>
            <span className='w-full h-[1px] absolute bottom-[calc(25%-20px/4)] bg-[#23212C]'></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
