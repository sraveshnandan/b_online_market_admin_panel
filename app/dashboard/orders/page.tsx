"use client"
import EmptyCard from '@/components/shared/EmptyCard'
import OrderInfomodel from '@/components/shared/OrderInfoModel'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const OrdersPage = () => {
    const { orders } = useSelector((state: RootState) => state.main);

    return (
        <div className=' flex flex-col w-full overflow-y-scroll h-full'>
            {
                orders.length > 0 ? (
                    <div className='flex flex-col gap-2'>
                        {orders.map((item, index) => (
                            <div className='bg-[#efeff1] w-full relative rounded-md p-2' key={index}>

                                <OrderInfomodel order={item} />
                                <div className='flex flex-col items-start gap-1 border p-2 w-full  rounded-md bg-white'>
                                    <div className='flex flex-row items-center justify-between gap-2 w-full'>
                                        <span className='text-brand font-semibold line-clamp-1'>Order Id:</span>
                                        <span className='text-gray-600 font-semibold'>{item._id}</span>
                                    </div>

                                    <div className='flex flex-row items-center gap-2  justify-between w-full'>
                                        <span className='text-brand font-semibold line-clamp-1'>Order Placed Date:</span>
                                        <span className='text-gray-600 font-semibold'>{new Date(item.createdAt).toDateString()}</span>
                                    </div>

                                    <div className='flex flex-row items-center gap-2  justify-between w-full'>
                                        <span className='text-brand font-semibold line-clamp-1'>Payment Mode:</span>
                                        <span className='text-gray-600 font-semibold'>{item.payment_mode}</span>
                                    </div>

                                    <div className='flex flex-row items-center gap-2  justify-between w-full'>
                                        <span className='text-brand font-semibold line-clamp-1'>Order Status:</span>
                                        <span className='text-gray-600 font-semibold'>{item.status}</span>
                                    </div>


                                    <div className='flex flex-row items-center gap-2  justify-between w-full'>
                                        <span className='text-brand font-semibold line-clamp-1'>Total Price:</span>
                                        <span className='text-green-600 text-xl font-semibold'>₹{item.totalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : <EmptyCard title='No Orders yet.' />
            }
        </div>
    )
}

export default OrdersPage