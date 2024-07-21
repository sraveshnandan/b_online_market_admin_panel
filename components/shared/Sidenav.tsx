"use client"

import { dashboardMenu } from "@/constants"
import { ChevronLeftIcon, ChevronRightIcon, CopyrightIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

type Props = {

}

const Sidenav = (props: Props) => {
    const [width, setwidth] = useState("w-16");
    const path = usePathname();
    const router = useRouter()
    const activeClass = "flex bg-brand items-center cursor-pointer justify-center flex-row my-2  px-4 py-2  rounded-md gap-2";
    const inActiveClass = "flex hover:bg-gray-200 cursor-pointer    duration-300 transition-all items-center justify-center flex-row my-2  px-4 py-2  rounded-md gap-2";



    const handleMenuClick = (data: any) => {
        return router.push(data.link)
    }
    return (
        <div className={`min-h-screen flex flex-col relative ${width} rounded-md  p-2 bg-white`}>
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

            <div className="rounded-md p-4">
                <Link className="flex flex-row items-center text-sm" href={"https://xecurecode.tech"}>
                    {width === "w-52" ? (<>   Powered by <span className="text-brand ml-2">XecureCode</span></>) : <CopyrightIcon className="text-brand" />}
                </Link>
            </div>

        </div>
    )
}

export default Sidenav