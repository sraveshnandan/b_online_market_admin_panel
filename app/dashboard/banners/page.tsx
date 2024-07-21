"use client"
import EmptyCard from '@/components/shared/EmptyCard';
import { Button } from '@/components/ui/button';
import { RootState } from '@/redux/store';
import { IBanners } from '@/types';
import { PenSquareIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BannersPage = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state: RootState) => state.main);



  // handling new banner create 
  const handleNewBannerCreate = () => {

  }


  // handleing banner delete action 
  const handleBannerDelete = (data: IBanners) => {
    console.log("banner id", data._id)
  }


  // handleing banner update action
  const handleBannerEdit = (data: IBanners) => {
    console.log("banner id", data._id)
  }


  return (
    <div className='w-full overflow-scroll rounded-md h-full p-2'>

      {/* All banners List  */}

      <div className='bg-white rounded-md flex-col gap-2 w-full p-2'>
        <div className='flex my-4 flex-row w-full items-center justify-between'>
          <span className='lg:text-3xl sm:text-md font-semibold '>All Banners</span>
          <Button onClick={handleNewBannerCreate} className=' flex bg-brand flex-row text-sm items-center gap-2'><PlusIcon /> Create Banner</Button>
        </div>


        {
          banners.length > 0 ? (
            <div className='grid sm:grid-cols-2 mt-4 lg:grid-cols-3 gap-2 grid-cols-1 items-center'>

              {/* action section  */}



              {banners.map((item, index) => (
                <div key={index} className=' bg-[#e5e5e6] relative  flex items-center justify-center  rounded-md p-2'>




                  {/* action section  */}

                  <div className='bg-white z-40 max-h-32 rounded-md flex flex-col items-center gap-4 p-2 absolute top-2 right-2'>

                    <PenSquareIcon onClick={() => handleBannerEdit(item)} className='cursor-pointer hover:scale-95 duration-300 transition-all' />
                    <Trash2Icon onClick={() => handleBannerDelete(item)} className='cursor-pointer hover:scale-95 duration-300 transition-all' color='red' />
                  </div>
                  {/* banners Img  */}
                  <div className='rounded-md w-full h-full overflow-hidden flex items-center border-2 justify-center'>
                    <Image src={item.image.url} className='object-cover  hover:scale-110 duration-300 transition-all  aspect-square w-full h-full' width={100} height={100} alt='banner' />
                  </div>
                </div>
              ))}

            </div>
          ) : <EmptyCard title="No data yet." />
        }
      </div>

    </div>
  )
}

export default BannersPage