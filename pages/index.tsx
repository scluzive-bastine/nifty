import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import nftbg from '../images/nft.svg'
import meshbg from '../images/mesh.svg'
import Grid from '../components/Home/Grid'
import vbg from '../images/vbg.svg'

const Home: NextPage = () => {
  return (
    <>
      <section className='mx-auto max-w-screen-lg 2xl:max-w-screen-xl mt-28 px-4 xl:px-0'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div className='col-auto'>
            <div className='flex flex-col space-y-3 md:space-y-4'>
              <h2 className='text-gray-400 uppercase text-xs'>Nifty Marketplace</h2>
              <div className='flex space-x-2 md:space-x-5 items-center'>
                <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
                  Discover
                </h2>
                <div className='bg-darkGray w-[100px] h-[40px] md:w-[100px] md:h-[40px] xl:w-[120px] xl:lg:h-[50px] 2xl:w-[145px] 2xl:h-[55px] rounded-full flex-shrink-0 relative'>
                  <Image
                    src={meshbg}
                    className='object-cover w-full h-full rounded-full'
                    alt='NFT'
                  />
                </div>
                <h2 className='text-2xl md:text-6xl 2xl:text-7xl text-white font-bold tracking-wider'>
                  NFT
                </h2>
              </div>
              <div className='flex space-x-5 2xl:space-x-10 items-center'>
                <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
                  And
                </h2>
                <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
                  Verify
                </h2>

                <div className='bg-gray-300 w-[100px] h-[40px] md:w-[100px] md:h-[40px] xl:w-[120px] xl:lg:h-[50px] 2xl:w-[145px] 2xl:h-[55px] rounded-full flex-shrink-0 relative'>
                  <Image
                    src={nftbg}
                    className='object-cover w-full h-full rounded-full'
                    alt='NFT'
                  />
                </div>
              </div>
              <h2 className='text-4xl md:text-5xl 2xl:text-6xl text-white font-bold tracking-wider'>
                NFT
              </h2>
            </div>
            <div className='flex space-x-2 md:space-x-5 mt-10'>
              <button className='bg-orange-20 hover:bg-orange-20/80 text-white font-semibold rounded-full px-8 md:px-10 py-3 transition duration-150 ease-in-out'>
                Discover
              </button>
              <button className='bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full px-8 md:px-10 py-3 transition duration-150 ease-in-out'>
                Verify NFT
              </button>
            </div>
          </div>
          <div className='grid-animation relative col-auto'>
            <Grid />
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
      <section className='h-[441px] w-full relative mb-20 flex justify-center items-center md:mt-20'>
        <Image
          src={vbg}
          className='w-full h-full object-contain animate-pulse'
          alt='Verify background'
        />
        <div className='absolute bg-darkGray border border-gray-20 rounded-2xl p-5 w-full md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px] flex items-center justify-center shadow'>
          <article className='text-center'>
            <h2 className='text-white text-2xl font-semibold mb-2'>Verify Your NFT</h2>
            <p className='text-gray-500'>Detection for Ethereum & Polygon NFTs</p>
            <button className='bg-orange-20 hover:bg-orange-20/80 text-white font-semibold rounded-full px-8 md:px-10 py-3 mt-8 transition duration-150 ease-in-out'>
              Verify Now
            </button>
          </article>
        </div>
      </section>
    </>
  )
}

export default Home
