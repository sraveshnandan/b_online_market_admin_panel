
"use client"
import EmptyCard from '@/components/shared/EmptyCard';
import { Button } from '@/components/ui/button';
import { RootState } from '@/redux/store';
import { PenSquareIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CategoryPage = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector((state: RootState) => state.main)
    return (
        <div className='w-full overflow-scroll rounded-md h-full p-2'>

            {/* All banners List  */}

            <div className='bg-white rounded-md flex-col gap-2 w-full p-2'>
                <div className='flex my-4 flex-row w-full items-center justify-between'>
                    <span className='lg:text-3xl sm:text-md font-semibold '>All Categories</span>
                    <Button className=' flex bg-brand flex-row text-sm items-center gap-2'><PlusIcon /> Create Category</Button>
                </div>


                {
                    categories.length > 0 ? (
                        <div className='grid sm:grid-cols-2 mt-4 lg:grid-cols-3 gap-2 grid-cols-1 items-center'>

                            {/* action section  */}



                            {categories.map((item, index) => (
                                <div key={index} className=' bg-[#efeff1] relative gap-1  flex items-center flex-row justify-start  rounded-md p-2'>
                                    {/* action section  */}
                                    <div className='bg-white z-40 max-h-32 rounded-md  flex flex-row items-center justify-center gap-2 p-2 absolute top-1 right-1'>

                                        <PenSquareIcon onClick={() => { }} className='cursor-pointer text-sm hover:scale-95 duration-300 transition-all' />
                                        <Trash2Icon onClick={() => { }} className='cursor-pointer text-sm hover:scale-95 duration-300 transition-all' color='red' />
                                    </div>
                                    {/* Category Img  */}
                                    <div className='rounded-md  overflow-hidden flex mr-2 justify-center'>
                                        <Image src={item.image.url} className='object-contain hover:scale-105 cursor-pointer duration-300 transition-all' width={80} height={80} alt='banner' />
                                    </div>

                                    {/* banners Img  */}
                                    <div className='rounded-md flex-grow overflow-hidden flex flex-col   justify-center'>
                                        <span className='text-xl font-semibold'>{item.name}</span>
                                        <span className='text-[10px] opacity-60 font-semibold'>{new Date(item.createdAt).toDateString()}</span>
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

export default CategoryPage