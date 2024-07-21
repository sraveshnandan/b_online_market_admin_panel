import { IShop } from '@/types'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { InfoIcon } from 'lucide-react'
import Image from 'next/image'


type Props = {
    shop: IShop
}

const Infomodel = ({ shop }: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='absolute bg-white rounded-full p-1 top-4 right-4 z-50'>
                    <InfoIcon className='text-sm cursor-pointer  text-blue-500' />
                </div>
            </DialogTrigger>
            <DialogContent className='bg-[#efeff1]'>
                <DialogHeader>
                    <DialogTitle>{`Other details about ${shop.name}`}</DialogTitle>
                    <DialogDescription className=''>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>Creation Date: <span className='opacity-55 text-gray-600 text-md'>{new Date(shop.createdAt).toDateString()}</span></span>
                        <span className='flex line-clamp-1 flex-row items-center gap-4 text-brand'>Description: <span className='opacity-55 text-gray-600 text-md line-clamp-1 '>{shop.description}</span></span>
                        <span className='flex  flex-row items-center gap-4 text-brand'>Owner Name: <span className='opacity-55 text-gray-600 text-md'>{shop.owner.full_name}</span></span>
                        <span className='flex flex-row items-center gap-4 text-brand'>Owner Email: <span className='opacity-55 text-gray-600 text-md'>{shop.owner.email.substring(0, 55)}</span></span>
                        <span className='flex flex-row items-center gap-4 text-brand'>Owner Mobile No: <span className='opacity-55 text-gray-600 text-md'>+91 {shop.owner.phone_no}</span></span>
                        <span className='flex mt-2 flex-row items-center gap-4 text-brand'>Owner Image: <span className='opacity-55 text-gray-600 text-md '><Image src={shop.owner.avatar.url} alt='owner logo' width={40} height={40} className='rounded-full' /></span></span>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default Infomodel