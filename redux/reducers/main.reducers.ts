import { IBanners, ICategory, IOrder, IProduct, IShop, IUser } from "@/types";
import { api_key, api_url } from "@/utils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";





type initialStateType = {
    banners: IBanners[],
    categories: ICategory[],
    shops: IShop[],
    users: IUser[],
    products: IProduct[],
    orders: IOrder[],
    isLoading: boolean,
    isError: boolean,
    errMsg: string,
}
const initialState: initialStateType = {
    isLoading: false,
    isError: false,
    shops: [],
    users: [],
    orders: [],
    banners: [],
    categories: [],
    errMsg: "",
    products: []
}





const fetchAllData = createAsyncThunk("fetchAllData", async (params, thunkApi) => {
    try {

        const res = await fetch(`https://bom-api-1-0-1.onrender.com/api/v1/getAllData?key=com.sravesh.bom`);

        const apiRes = await res.json();

        console.log("fetchAllData fn exec successfully.");
        console.log(apiRes)

        return apiRes.result
    } catch (error: any) {
        console.log("error occured while fetching all data.", error)
        return thunkApi.rejectWithValue(error.message || "Something went wrong.")
    }

})
const MainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        // add/update banners 
        addOrUpdateBanners: (state, action) => {
            // if already exists 
            const isExists = state.banners.findIndex(b => b._id.toString() === action.payload._id.toString());

            if (isExists) {
                return state.banners[isExists] = action.payload
            }
            state.banners.push(action.payload)

        },
        // delete banner 
        deleteBanner: (state, action) => {
            const bannerIndex = state.banners.findIndex(b => b._id.toString() === action.payload._id.toString());
            state.banners.splice(bannerIndex)
        },
        // add/update banners 
        addOrUpdateCategory: (state, action) => {
            // if already exists 
            const isExists = state.categories.findIndex(b => b._id.toString() === action.payload._id.toString());

            if (isExists) {
                return state.categories[isExists] = action.payload
            }
            state.categories.push(action.payload)

        },
        // delete banner 
        deleteCategory: (state, action) => {
            const categoryIndex = state.categories.findIndex(b => b._id.toString() === action.payload._id.toString());
            state.banners.splice(categoryIndex)
        }
    },
    extraReducers: builder => {
        // pending state 
        builder.addCase(fetchAllData.pending, state => {
            state.isLoading = true;
        });
        // sucess state 
        builder.addCase(fetchAllData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.banners = action.payload.banners;
            state.categories = action.payload.categories;
            state.orders = action.payload.orders;
            state.products = action.payload.products;
            state.shops = action.payload.shops;
        })
        // error state 
        builder.addCase(fetchAllData.rejected, state => {
            state.isLoading = false;
            state.isError = true;
            state.errMsg = "Unable to fetch data."
        })
    }
})




export { fetchAllData }
export const { addOrUpdateBanners, addOrUpdateCategory, deleteBanner, deleteCategory } = MainSlice.actions
export default MainSlice.reducer