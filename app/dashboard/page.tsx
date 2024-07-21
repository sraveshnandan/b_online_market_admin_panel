import Sidenav from '@/components/shared/Sidenav';
import { fetchAllData } from '@/utils';

const DashboardPage = async () => {

    const data = await fetchAllData();

    return (
        <div className=''>
            {/* charts and stats  */}
        </div>
    )
}

export default DashboardPage