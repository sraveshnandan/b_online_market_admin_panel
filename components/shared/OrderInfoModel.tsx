import { IOrder } from '@/types'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { InfoIcon } from 'lucide-react'


type Props = {
    order: IOrder
}

const OrderInfomodel = ({ order }: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='absolute bg-white rounded-full p-1 top-2 right-2 z-50'>
                    <InfoIcon className='text-sm cursor-pointer  text-blue-500' />
                </div>
            </DialogTrigger>
            <DialogContent className='bg-[#efeff1]'>
                <DialogHeader>
                    <DialogTitle>{`Other details about ${order._id}`}</DialogTitle>
                    <DialogDescription className=''>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>Creation Date: <span className='opacity-55 text-gray-600 text-md'>{new Date(order.createdAt).toDateString()}</span></span>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>Order Status: <span className='opacity-55 text-gray-600 text-md'>{order.status}</span></span>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>Payment Mode: <span className='opacity-55 text-gray-600 text-md'>{order.payment_mode}</span></span>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>Total Price: <span className='opacity-55 text-green-600 text-xl font-semibold'>₹
                            {order.totalPrice}</span></span>

                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>User full name: <span className='opacity-55 text-gray-600 text-md'>{order.user.full_name}</span></span>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>User email: <span className='opacity-55 text-gray-600 text-md'>{order.user.email}</span></span>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>User Mobile no: <span className='opacity-55 text-gray-600 text-md'>+91 {order.user.phone_no}</span></span>

                        {/* product details  */}





                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default OrderInfomodel