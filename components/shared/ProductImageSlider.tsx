import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Iimage } from "@/types"
import Image from "next/image"


type Props = {
    banners: Iimage[]
}

const ProductImageSlider = ({ banners }: Props) => {

    console.log(banners.length)
    return (
        <Carousel>
            <CarouselContent className="w-full h-full">
                {banners.map((item, index) => (
                    <CarouselItem className=""><Image src={item.url} className="w-full h-full" width={100} height={100} alt="ban" /></CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default ProductImageSlider