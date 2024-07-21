/* This file only exports all types declarations. */



// interface for Image object 
interface Iimage {
    public_id: string,
    url: string
}

interface ITimeStamps {
    createdAt: string,
    updatedAt: string
}

// interface for category 
export interface ICategory extends ITimeStamps {
    _id: string
    name: string,
    image: Iimage,
    creator: IUser
}

// interface for Banner
export interface IBanners extends ITimeStamps {

    image: Iimage,
    _id: string,
    name: string,
    creator: IUser,
}

// interface for User
export interface IUser extends ITimeStamps {
    avatar: Iimage;
    wallet: {
        currentBallence: number;
        transations: string[];
    };
    otp: {
        expiry: string;
        value?: string;
    };
    _id: string;
    full_name: string;
    email: string;
    phone_no: string;
    isAdmin: boolean;
    isShopOwner: boolean;
    referCode: string;
    referCount: IUser[];
    orders: IOrder[];
    cart: string[];
    wishlist: string[];
    address: IAddress[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    pin_code: number;
}

// interface for Shop
export interface IShop extends ITimeStamps {

    subscription: {
        currentPlan: string;
        expiryDate: string;
        transactions: string;
        isexpired?: boolean
    };
    stats: {
        view: number;
    };
    _id: string;
    name: string;
    description: string;
    address: string;
    banners: Iimage[];
    owner: IUser;
    pin_code: number;
}

// interface for Product
export interface IProduct extends ITimeStamps {
    _id: string;
    name: string;
    description: string;
    originalPrice: number;
    discountPrice: number;
    banners: Iimage[];
    categories: ICategory[];
    quantity: number;
    ratings: number;
    owner: IShop;
    property: any[];
    reviews: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// interface for address 
export interface IAddress {
    appartment_building_no: number,
    landmark: string,
    city: string,
    state: string,
    pin_code: number,
    contact_no: number
}

// interface for Order
export interface IOrder extends ITimeStamps {
    address: IAddress,
    _id: "6688bbcc7f1a3df30973485b",
    products: { product: IProduct, quantity: number }[]
    totalPrice: number
    user: IUser,
    status: string,
    shop: IShop
    completed: boolean
    payment_mode: string,
}


