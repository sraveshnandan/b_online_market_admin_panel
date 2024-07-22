

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusIcon, UploadCloudIcon, X } from "lucide-react"
import { Button } from "../ui/button"
import { FormEvent, useRef, useState } from "react"
import Image from "next/image"
import { toast } from "sonner"
import { useDispatch } from "react-redux"
import { addOrUpdateBanners } from "@/redux/reducers/main.reducers"


type Props = {
    handleNewBannerCreate?: () => {}
}

const CategoryCreateModel = ({ handleNewBannerCreate }: Props) => {
    const dispatch = useDispatch()
    const imageRef = useRef<HTMLInputElement>();
    const [open, setopen] = useState(false)
    const [imageFile, setimageFile] = useState<File | null>(null);
    const [previewUrl, setpreviewUrl] = useState<string>("");
    const [categoryName, setCategoryName] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false)
    // handling file change 
    const handleFileChange = (ev: any) => {
        setimageFile(ev.target.files[0]);
        const p_url = URL.createObjectURL(ev.target.files[0]);
        setpreviewUrl(p_url)

    }


    // handling banner create fn 

    const handleBannerCreate = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        if (categoryName.length === 0) {

            return toast.error("Category name can't be empty.")

        }
        if (!imageFile) {
            return toast.error("Category image is required.")

        }


        try {
            setloading(true)
            const formdata = new FormData();
            formdata.append("name", categoryName);
            formdata.append("image", imageFile);

            const res = await fetch("https://bom-api-1-0-1.onrender.com/api/v1/category", {
                method: "POST",
                headers: {
                    token: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDJlMjc2M2E0ZWE5ODJiZTg4OGViOCIsImlhdCI6MTcyMDg2MTQ2NiwiZXhwIjoxNzQ2NzgxNDY2fQ.DLFsi7BZ6fhLH9vS-4uSaCi-bV41bFfl0-OADMXHRYw",
                },
                body: formdata

            })

            const data = await res.json();
            console.log("banner create success", data);
            dispatch(addOrUpdateBanners({ ...data.new_category }))
            return toast.success("Banner created successfully.")
        } catch (error) {

            console.log("err while creating a new banner.", error);
            return toast.error("Error occured while creating  a new banner.")

        } finally {
            setimageFile(null);
            setCategoryName("")
            setloading(false)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setopen}>

            <DialogTrigger><Button onClick={handleNewBannerCreate} className=' flex bg-brand flex-row text-sm items-center gap-2'><PlusIcon /> Create Banner</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader className="text-gray-600 font-semibold text-xl">Creating a new Category</DialogHeader>
                <DialogDescription className="p-2 bg-[#efeff1] rounded-md flex flex-col ">


                    <form onSubmit={handleBannerCreate} >



                        {/* Input section  */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="mb-1 text-sm font-semibold">Category name:</label>
                            <input onChange={(ev) => setCategoryName(ev.target.value)} className="p-2 rounded-md text-md font-semibold" id="name" type="text" placeholder="banner name" />
                        </div>


                        {/* Input section  */}
                        <div className="flex mt-4 flex-col">
                            {
                                !imageFile ? (
                                    <>
                                        <label htmlFor="name" className="mb-1 text-sm font-semibold">Banner Image:</label>
                                        <input onChange={(ev) => handleFileChange(ev)} className="p-2 rounded-md text-md font-semibold" id="name" type="file" hidden ref={imageRef} placeholder="banner name" />
                                        <div className="w-full bg-white rounded-md min-h-32 flex-col flex items-center justify-center">
                                            <UploadCloudIcon className="text-brand  cursor-pointer" onClick={() => imageRef.current?.click()} size={80} />
                                            <span>choose an image for your banner.</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="relative w-full mt-2 h-52 flex items-center justify-center">
                                        <div className="absolute top-2 right-2 bg-red-600 rounded-full p-2 cursor-pointer"> <X size={20} color="white" onClick={() => {
                                            setimageFile(null as any);
                                            setpreviewUrl("")
                                        }} /></div>
                                        <Image src={previewUrl} className="w-full h-full object-cover rounded-md shadow-md shadow-gray-200" alt="raw image" width={100} height={100} />
                                    </div>
                                )
                            }
                        </div>


                        {/* submit button  */}

                        <Button type="submit" className={`my-4 ${loading && "bg-gray-200"} bg-brand text-md font-semibold`}>{loading ? "Creating..." : "Create Banner"}</Button>
                    </form>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}

export default CategoryCreateModel