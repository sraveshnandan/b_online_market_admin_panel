import { IProduct } from '@/types'
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
    product: IProduct
}

const ProductInfomodel = ({ product }: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='absolute bg-white rounded-full p-1 top-4 right-4 z-50'>
                    <InfoIcon className='text-sm cursor-pointer  text-blue-500' />
                </div>
            </DialogTrigger>
            <DialogContent className='bg-[#efeff1]'>
                <DialogHeader>
                    <DialogTitle>{`Other details about ${product.name}`}</DialogTitle>
                    <DialogDescription className=''>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Product Id: <span className='opacity-55 text-gray-600 text-md'>{product._id}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Product Name: <span className='opacity-55 text-gray-600 text-md'>{product.name}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Description: <span className='opacity-55 text-gray-600 text-md line-clamp-1'>{product.description}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Creation Date: <span className='opacity-55 text-gray-600 text-md'>{new Date(product.createdAt).toDateString()}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Created By: <span className='opacity-55 text-gray-600 text-md'>{product.owner.name}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Original Price: <span className='opacity-55 text-red-600 text-md'>₹{product.originalPrice}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Discounted Price: <span className='opacity-55 text-green-600 text-lg'>₹{product.discountPrice}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Category: <span className='opacity-55 text-gray-600 text-md'>{product.categories[0].name}</span></span>


                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default ProductInfomodel