import { BanknoteIcon, BookmarkCheckIcon, BoomBoxIcon, ImageDownIcon, ListCollapseIcon, ListOrderedIcon, StoreIcon, VariableIcon } from "lucide-react"

const dashboardMenu = [
    {
        name: "Banners",
        link: "/dashboard/banners",
        icon: ImageDownIcon
    },
    {
        name: "Category",
        link: "/dashboard/category",
        icon: BookmarkCheckIcon
    },
    {
        name: "Shops",
        link: "/dashboard/shops",
        icon: StoreIcon
    },
    {
        name: "Products",
        link: "/dashboard/products",
        icon: BoomBoxIcon
    },
    {
        name: "Orders",
        link: "/dashboard/orders",
        icon: ListOrderedIcon
    },

]


export { dashboardMenu }