import type { NextPage } from 'next'
import Image from 'next/image'

import Grid from '@/components/Home/Grid'
import Card from '@/components/NFTCard/Card'

import nftbg from '@/images/nft.svg'
import meshbg from '@/images/mesh.svg'
import vbg from '@/images/vbg.svg'
import holder from '@/images/holder.svg'
import community from '@/images/community.svg'
import contact from '@/images/contact.svg'

import { BsImages, BsInstagram, BsTelegram, BsTwitter } from 'react-icons/bs'
import { BiImageAdd } from 'react-icons/bi'
import { HiOutlineUserPlus } from 'react-icons/hi2'
import Link from 'next/link'

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
      <section className='mt-20 mx-auto max-w-screen-xl rounded-xl bg-black-50 p-5 md:p-8'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-5 items-center'>
          <div className='col-auto md:col-span-2 xl:col-span-1'>
            <h2 className='text-gray-400 uppercase text-xs'>Nifty Marketplace</h2>
            <h3 className='text-2xl md:text-4xl font-semibold text-white'>
              NFT <br /> Collection
            </h3>
            <Link href='/collections'>
              <button className='bg-orange-20 hover:bg-orange-20/80 text-white font-semibold rounded-full px-8 md:px-10 py-3 mt-5 transition duration-150 ease-in-out'>
                View All
              </button>
            </Link>
          </div>
          <div className='col-auto md:col-span-4 xl:col-span-5'>
            <div className='relative flex space-x-5 touch-pan-x snap-x snap-mandatory snap-center overflow-x-scroll scroll-smooth scrollbar-hide'>
              {[1, 2, 3, 4, 5].map((index) => (
                <Card width={'w-[280px]'} image={holder} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='mt-20 mx-auto max-w-screen-xl rounded-xl px-4 xl:px-5'>
        <div className='mb-5'>
          <h2 className='text-gray-400 uppercase text-xs'>NFT Items</h2>
          <h3 className='text-2xl md:text-4xl font-semibold text-white'>Discover Items</h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <Card width={'w-auto'} image={holder} key={index} />
          ))}
        </div>
      </section>

      <section className='mt-20 mx-auto max-w-screen-lg px-4 xl:px-0'>
        <div>
          <div className='mb-10'>
            <h2 className='text-gray-400 uppercase text-xs mb-2'>Lazy Minting</h2>
            <h3 className='text-2xl md:text-4xl font-semibold text-white'>
              Mint and create your own collection
            </h3>
          </div>
          <div className='grid grid-cols md:grid-cols-3 gap-10'>
            <div className='rounded-xl p-5 bg-black-50'>
              <div className='w-16 h-16 mb-8 bg-darkGray rounded-full flex items-center justify-center'>
                <HiOutlineUserPlus className='text-2xl text-gray-500' />
              </div>
              <article>
                <h2 className='text-white text-lg font-semibold'>Create an account</h2>
                <p className='text-gray-400 text-sm'>
                  Get access to our Lazy minting by creating an account and setting up your wallet
                </p>
                <button className='px-4 py-2 mt-5 rounded-full bg-gray-400'>Coming soon</button>
              </article>
            </div>
            <div className='rounded-xl p-5 bg-black-50'>
              <div className='w-16 h-16 mb-8 bg-darkGray rounded-full flex items-center justify-center'>
                <BsImages className='text-2xl text-gray-500' />
              </div>
              <article>
                <h2 className='text-white text-lg font-semibold'>Set up your account</h2>
                <p className='text-gray-400 text-sm'>
                  Create details about your NFT image, metadata, network, and other details
                  required.
                </p>
                <button className='px-4 py-2 mt-5 rounded-full bg-gray-400'>Coming soon</button>
              </article>
            </div>
            <div className='rounded-xl p-5 bg-black-50'>
              <div className='w-16 h-16 mb-8 bg-darkGray rounded-full flex items-center justify-center'>
                <BiImageAdd className='text-2xl text-gray-500' />
              </div>
              <article>
                <h2 className='text-white text-lg font-semibold'>Create & Mint</h2>
                <p className='text-gray-400 text-sm'>
                  Once all the details are set for minting you’re ready to mint your NFT and create
                  your collection.
                </p>
                <button className='px-4 py-2 mt-5 rounded-full bg-gray-400'>Coming soon</button>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto xl:max-w-screen-lg 2xl:max-w-screen-xl mt-20 px-4 xl:px-0 mb-20'>
        <div className='mb-10'>
          <h2 className='text-gray-400 uppercase text-xs mb-2'>Greetings</h2>
          <h3 className='text-2xl md:text-4xl font-semibold text-white'>Say Hi or Reach out 👋🏾</h3>
        </div>

        <div className='mt-10'>
          <div className='grid grid-cols-5 gap-5'>
            <div className='p-10 bg-black-50 col-span-5 md:col-span-2 rounded-2xl'>
              <h2 className='text-2xl font-semibold text-white mb-2'>Our community</h2>
              <p className='text-gray-400 text-sm'>
                You can find sneak peeks, check out our upcoming features, chat, share and join our
                team.
              </p>
              <div className='flex space-x-8 items-center mt-8'>
                <div className='flex items-center justify-center bg-darkGray rounded-full w-16 h-16'>
                  <BsTwitter className='text-2xl text-gray-500' />
                </div>
                <div className='flex items-center justify-center bg-darkGray rounded-full w-16 h-16'>
                  <BsTelegram className='text-2xl text-gray-500' />
                </div>
                <div className='flex items-center justify-center bg-darkGray rounded-full w-16 h-16'>
                  <BsInstagram className='text-2xl text-gray-500' />
                </div>
              </div>
            </div>
            <div className='p-10 bg-gradient-to-r from-[#0C0B0F] to-[#181720] col-span-5 md:col-span-3 rounded-2xl flex justify-center'>
              <Image src={community} className='h-[180px]' alt='Join our community' />
            </div>
            <div className='p-10 bg-gradient-to-r from-[#0C0B0F] to-[#181720] col-span-5 md:col-span-3 rounded-2xl flex justify-center'>
              <Image src={contact} className='h-[180px]' alt='Contact us' />
            </div>
            <div className='p-10 bg-black-50 col-span-5 md:col-span-2 rounded-2xl'>
              <h2 className='text-2xl font-semibold text-white mb-2'>
                Got Questions or Recommendations
              </h2>
              <p className='text-gray-400 text-sm'>
                Be the first to ask, be the first to let us know. We are always available to attend
                to you and hear you out
              </p>
              <div className='flex space-x-8 items-center mt-8'>
                <button className='text-gray-400 hover:text-gray-500 font-semibold transition duration-200'>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
