
"use client"
import CategoryCreateModel from '@/components/shared/CategoryCreateModel ';
import EmptyCard from '@/components/shared/EmptyCard';
import { Button } from '@/components/ui/button';
import { deleteCategory } from '@/redux/reducers/main.reducers';
import { RootState } from '@/redux/store';
import { ICategory } from '@/types';
import { LoaderPinwheelIcon, PenSquareIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';

const CategoryPage = () => {

    const dispatch = useDispatch();
    const { categories } = useSelector((state: RootState) => state.main);
    const [loading, setloading] = useState(false);
    const [deletingCatId, setdeletingCatId] = useState("")




    // handleing banner delete action 
    const handleCategoryDelete = async (data: ICategory) => {
        setloading(true)
        setdeletingCatId(data._id)
        try {

            const res = await fetch(`https://bom-api-1-0-1.onrender.com/api/v1/category?id=${data._id}`, {
                method: "DELETE",
                headers: {
                    token: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDJlMjc2M2E0ZWE5ODJiZTg4OGViOCIsImlhdCI6MTcyMDg2MTQ2NiwiZXhwIjoxNzQ2NzgxNDY2fQ.DLFsi7BZ6fhLH9vS-4uSaCi-bV41bFfl0-OADMXHRYw",
                },

            })

            const apiRes = await res.json();


            if (apiRes.success) {
                dispatch(deleteCategory({ ...data }));
                return toast.success(`${data.name} deleted successfully.`)
            }

        } catch (error) {
            console.log("err while deleting category", error);
            return toast.error("Something went wrong.")

        } finally {
            setloading(false);
            setdeletingCatId("")
        }
    }
    return (
        <div className='w-full overflow-scroll rounded-md h-full p-2'>

            {/* All banners List  */}

            <div className='bg-white rounded-md flex-col gap-2 w-full p-2'>
                <div className='flex my-4 flex-row w-full items-center justify-between'>
                    <span className='lg:text-3xl sm:text-md font-semibold '>All Categories</span>
                    <CategoryCreateModel />
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
                                        <Trash2Icon onClick={() => handleCategoryDelete(item)} className='cursor-pointer text-sm hover:scale-95 duration-300 transition-all' color='red' />
                                    </div>
                                    {/* Category Img  */}
                                    <div className='rounded-md  overflow-hidden flex mr-2 justify-center'>
                                        {
                                            loading && deletingCatId.toString() === item._id.toString() ? (
                                                <div className='flex-grow h-full flex  items-center justify-center bg-white rounded-md'><LoaderPinwheelIcon color='#ff5227' className='animate-spin' /></div>
                                            ) : (
                                                <>
                                                    <Image src={item.image.url} className='object-contain  hover:scale-110 duration-300 transition-all  aspect-square w-full h-full' width={100} height={100} alt='banner' />
                                                </>
                                            )
                                        }
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