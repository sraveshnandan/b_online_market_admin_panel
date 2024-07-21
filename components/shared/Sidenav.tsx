"use client"

import { dashboardMenu } from "@/constants"
import { fetchAllData } from "@/redux/reducers/main.reducers"
import { RootState } from "@/redux/store"
import { ChevronLeftIcon, ChevronRightIcon, CopyrightIcon, NetworkIcon, RefreshCcwDotIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

type Props = {

}

const Sidenav = (props: Props) => {
    const dispatch = useDispatch();

    const { isLoading, isError, } = useSelector((state: RootState) => state.main)
    const [width, setwidth] = useState("w-16");
    const path = usePathname();
    const router = useRouter()
    const [loading, setloading] = useState(false);
    const [err, seterr] = useState(false)
    const activeClass = "flex bg-brand items-center cursor-pointer justify-center flex-row my-2  px-4 py-2  rounded-md gap-2";
    const inActiveClass = "flex hover:bg-gray-200 cursor-pointer    duration-300 transition-all items-center justify-center flex-row my-2  px-4 py-2  rounded-md gap-2";



    const handleMenuClick = (data: any) => {
        return router.push(data.link)
    }



    // handleing refresh 
    const handleRefresh = async () => {
        setloading(true);
        seterr(false);

        try {
            await dispatch(fetchAllData() as any);
            setloading(false);
        } catch (error) {
            setloading(false);
            seterr(true);
        }
    }
    return (
        <div className={`min-h-screen flex flex-col relative ${width} rounded-md  p-2 bg-white`}>

            {
                loading && (
                    <div className="flex-1 absolute w-[100vw] z-50 top-0 left-0 right-0 p-12 h-screen backdrop-blur-sm flex items-center justify-center">
                        {
                            loading && (
                                <div className="p-8 border-l-2 rounded-full border-brand animate-spin"></div>
                            )
                        }

                        {
                            err && (
                                <div className="flex flex-col rounded-md min-h-44 items-center justify-center w-[calc(100vw-40vw)] shadow-lg shadow-black p-2 bg-white">
                                    <NetworkIcon color="red" />
                                    <span className="text-sm font-semibold my-2">Something went wrong.</span>

                                    <span onClick={() => router.refresh()} className="font-semibold bg-brand px-3 py-1 text-white rounded-full my-2">reload page</span>
                                </div>
                            )
                        }
                    </div>
                )
            }

            {/* refresh button  */}
            <div onClick={handleRefresh} className='fixed w-fit cursor-pointer bg-[#efeff1] z-50 p-2 h-fit rounded-md xl:top-4 bottom-14 hover:bg-brand  xl:right-4'>
                <RefreshCcwDotIcon />
            </div>
            {/* toggler  */}

            <div onClick={() => {
                if (width === "w-52") {
                    setwidth("w-16")

                } else {
                    setwidth("w-52")
                }
            }} className="bg-brand opacity-20 cursor-pointer hover:opacity-80 shadow-sm shadow-gray-400 rounded-sm m-1 w-fit absolute top-1 p-1 text-white  -right-9"> {
                    width === "w-52" ? <ChevronLeftIcon /> : <ChevronRightIcon />
                }</div>

            {/* logo  */}

            <Link href={"/dashboard"} className="flex border-b-2 pb-2 items-center">
                <span className={`bg-brand rounded-md p-1 cursor-pointer hover:scale-95 duration-500 transition-all w-full flex flex-row items-center justify-center  text-white text-2xl font-semibold`}>B{width === "w-52" && (<span className="text-sm ml-2">Online Market</span>)}</span>

            </Link>


            {/* dashboard menu  */}

            <div className="mt-2 overflow-y-auto  flex-grow">
                {
                    dashboardMenu.map((item, index) => (
                        <div onClick={() => handleMenuClick(item)} key={index} className={`${path === item.link ? activeClass : inActiveClass}`}>
                            <item.icon className={`${path === item.link ? "text-white" : "text-brand"}`} />
                            {width === "w-52" && (
                                <span className={`flex-grow ${item.link === path && "text-white"} font-semibold`}>{item.name}</span>
                            )}
                        </div>
                    ))
                }
            </div>


            {/* copyright section  */}

            <div className="rounded-md p-2">
                <Link className="flex flex-row items-center text-sm" href={"https://xecurecode.tech"}>
                    {width === "w-52" ? (<>   Powered by <span className="text-brand  ml-2">XecureCode</span></>) : <CopyrightIcon className="text-brand" />}
                </Link>
            </div>

        </div>
    )
}

export default Sidenav