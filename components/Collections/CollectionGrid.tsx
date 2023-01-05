import Card from '@/components/NFTCard/Card'
import holder from '@/images/holder.svg'

interface Props {
  loading: boolean
  collections: any[]
}

const CollectionGrid = ({ collections, loading }: Props) => {
  console.log(collections)

  return (
    <>
      {loading
        ? [1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className='bg-darkGray p-3 border border-gray-20 w-[280px] rounded-xl flex-shrink-0 relative'
            >
              <div className='w-full h-[250px] bg-black rounded-xl animate-pulse'></div>
              <div className='mt-2 rounded-full w-1/2 h-5 bg-black animate-pulse'></div>
              <div className='w-full mt-3'>
                <div className='grid grid-cols-2 gap-2 animate-pulse'>
                  <div>
                    <div className='mt-2 rounded-full w-1/2 h-3 bg-black'></div>
                    <div className='mt-2 rounded-full w-full h-3 bg-black'></div>
                  </div>
                  <div>
                    <div className='mt-2 rounded-full w-1/2 h-3 bg-black'></div>
                    <div className='mt-2 rounded-full w-full h-3 bg-black'></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : collections.map((data: any) => (
            <Card width={'w-[280px]'} image={holder} key={data.contractAddress} data={data} />
          ))}
    </>
  )
}

export default CollectionGrid
