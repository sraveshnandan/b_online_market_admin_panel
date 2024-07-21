"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className=" flex  items-center justify-center min-h-screen">
      <div className=" md:p-8  bg-brand/90 flex flex-col shadow-lg shadow-black/60 lg:min-h-[calc(100vh-60vh)] min-h-48 items-center justify-center rounded-md md:w-[60%] w-[90%] ">
        <span className="text-white md:mb-4 2xl:text-5xl lg:text-3xl text-xl font-semibold">Welcome to Admin Panel.</span>
        <div className="flex  w-full mt-4 items-center justify-center">
          <Button onClick={() => router.push("/dashboard")} className="bg-white text-brand xl:w-[30%] md:w-[60%] xl:py-6 sm:py-2 md:text-2xl font-semibold">Continue</Button>
        </div>
      </div>
    </div>
  );
}
