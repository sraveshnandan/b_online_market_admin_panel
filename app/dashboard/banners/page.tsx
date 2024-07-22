"use client"
import BannerCreateModel from '@/components/shared/BannerCreateModel';
import EmptyCard from '@/components/shared/EmptyCard';
import { Button } from '@/components/ui/button';
import { deleteBanner } from '@/redux/reducers/main.reducers';
import { RootState } from '@/redux/store';
import { IBanners } from '@/types';
import { LayoutDashboard, LoaderPinwheelIcon, PenSquareIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';

const BannersPage = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state: RootState) => state.main);
  const [loading, setloading] = useState(false);
  const [deletingBAnId, setdeletingBAnId] = useState("")






  // handleing banner delete action 
  const handleBannerDelete = async (data: IBanners) => {
    setloading(true)
    setdeletingBAnId(data._id)
    try {

      const res = await fetch(`https://bom-api-1-0-1.onrender.com/api/v1/banner?id=${data._id}`, {
        method: "DELETE",
        headers: {
          token: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDJlMjc2M2E0ZWE5ODJiZTg4OGViOCIsImlhdCI6MTcyMDg2MTQ2NiwiZXhwIjoxNzQ2NzgxNDY2fQ.DLFsi7BZ6fhLH9vS-4uSaCi-bV41bFfl0-OADMXHRYw",
        },

      })

      const apiRes = await res.json();


      if (apiRes.success) {
        dispatch(deleteBanner({ ...data }));
        return toast.success(`${data.name} deleted successfully.`)
      }

    } catch (error) {
      console.log("err while deleting category", error);
      return toast.error("Something went wrong.")

    } finally {
      setloading(false);
      setdeletingBAnId("")
    }
  }


  // handleing banner update action
  const handleBannerEdit = (data: IBanners) => {
    return toast.info("First pay thee bill then use it.☻")
  }


  return (
    <div className='w-full overflow-scroll rounded-md h-full p-2'>

      {/* All banners List  */}

      <div className='bg-white rounded-md flex-col gap-2 w-full p-2'>
        <div className='flex my-4 flex-row w-full items-center justify-between'>
          <span className='lg:text-3xl sm:text-md font-semibold '>All Banners</span>
          <BannerCreateModel />
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
                  <div className='rounded-md w-full h-32 overflow-hidden flex items-center border-2 justify-center'>
                    {
                      loading && deletingBAnId.toString() === item._id.toString() ? (
                        <div className='flex-grow h-full flex  items-center justify-center bg-white rounded-md'><LoaderPinwheelIcon color='#ff5227' className='animate-spin' /></div>
                      ) : (
                        <>
                          <Image src={item.image.url} className='object-contain  hover:scale-110 duration-300 transition-all  aspect-square w-full h-full' width={100} height={100} alt='banner' />
                        </>
                      )
                    }
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