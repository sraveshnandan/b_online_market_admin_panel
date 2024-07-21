"use client"
import EmptyCard from '@/components/shared/EmptyCard'
import ProductImageSlider from '@/components/shared/ProductImageSlider'
import ProductInfomodel from '@/components/shared/ProductImfoModel'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductPage = () => {
    const { products } = useSelector((state: RootState) => state.main)
    return (
        <div className='w-full h-full flex-col gap-2 overflow-y-scroll'>
            <span className='md:text-2xl font-semibold'>All Products</span>

            {
                products.length > 0 ? (<div className='grid sm:grid-cols-2 mt-4 lg:grid-cols-4 gap-2 grid-cols-1 items-center'>
                    {
                        products.map((item, index) => (
                            <div className='bg-[#efeff1] relative flex flex-col rounded-md  p-2' key={index}>

                                <ProductInfomodel product={item} />
                                {/* product img slider  */}
                                <div className='w-[98%] h-46 flex  rounded-md overflow-hidden flex-row'>
                                    <Image src={item.banners[0].url} className=' shadow-lg shadow-brand h-44 w-full' width={100} height={100} alt='logo' />
                                </div>

                                {/* product details  */}

                                <div className='w-full my-2 flex-col flex '>
                                    <span className='text-xl font-semibold text-brand'>{item.name}</span>
                                    <span className='text-[10px] font-semibold opacity-60'>{item.description}</span>


                                    {/* price details  */}

                                    <div className='flex flex-row items-center gap-4'>
                                        <span className='flex font-semibold text-lg flex-row items-center gap-2 text-green-600'>₹{item.discountPrice}</span>
                                        <span className='flex font-semibold text-lg flex-row items-center gap-2 text-red-600'>₹{item.originalPrice}</span>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>) : <EmptyCard title='No products yet.' />
            }

        </div>
    )
}

export default ProductPage