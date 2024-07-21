"use client"
import EmptyCard from '@/components/shared/EmptyCard'
import Infomodel from '@/components/shared/Infomodel'
import { RootState } from '@/redux/store'
import { IShop } from '@/types'
import { InfoIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ShopPage = () => {
    const { shops } = useSelector((state: RootState) => state.main);

    const [modelOpen, setmodelOpen] = useState(false)

    // handling info open 

    const handleInfoOpen = (data: IShop) => {
        console.log(data)
    }
    return (
        <div className='w-full flex-col h-full gap-2 p-2 overflow-y-scroll'>
            <span className='md:text-2xl font-semibold'>All Shops</span>

            {
                shops.length > 0 ? (
                    <div className='grid sm:grid-cols-2 mt-4 lg:grid-cols-3 gap-2 grid-cols-1 items-center'>
                        {
                            shops.map((item, index) => (
                                <div className='bg-[#efeff1] h-42 relative overflow-hidden  flex flex-col rounded-md p-2' key={index}>
                                    {/* info icon  */}

                                    <Infomodel shop={item} />


                                    {/* shop img  */}
                                    <div className='w-full h-52'>
                                        <Image src={item.banners[0].url} alt='shop_img' width={100} height={100} className='object-fill h-full w-full rounded-md' />

                                    </div>

                                    {/* shop details  */}

                                    <div className='w-full my-2 flex-col flex '>
                                        <span className='text-xl font-semibold'>{item.name}</span>
                                        <span className='text-[10px] opacity-60 font-semibold'>{item.address}</span>


                                    </div>

                                </div>
                            ))
                        }

                    </div>
                ) : <EmptyCard title='No Shops yet.' />
            }
        </div>
    )
}

export default ShopPage