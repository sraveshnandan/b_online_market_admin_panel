"use client"
import EmptyCard from '@/components/shared/EmptyCard'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const OrdersPage = () => {
    const { orders } = useSelector((state: RootState) => state.main)
    return (
        <div className=' flex flex-col w-full h-full'>
            {
                orders.length > 0 ? (
                    <div className='flex flex-col gap-2'>
                        {orders.map((item, index) => (
                            <div className='bg-[#efeff1] w-full rounded-md p-2' key={index}>

                            </div>
                        ))}
                    </div>
                ) : <EmptyCard title='No Orders yet.' />
            }
        </div>
    )
}

export default OrdersPage