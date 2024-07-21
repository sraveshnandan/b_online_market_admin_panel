"use client"
import { fetchAllData } from '@/redux/reducers/main.reducers';
import { RootState } from '@/redux/store';
import { RefreshCcwDotIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const DashboardPage = () => {

    const dispatch = useDispatch();
    const { banners } = useSelector((state: RootState) => state.main)

    useEffect(() => {
        if (!banners.length) {
            dispatch(fetchAllData() as any)
        }
        toast.success("hi")
    }, [banners.length])

    return (
        <div className=''>

            {/* charts and stats  */}
        </div>
    )
}

export default DashboardPage