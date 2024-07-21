
const api_url = process.env.NEXT_PUBLIC_API_URL!;
const api_key = process.env.NEXT_PUBLIC_API_SECRET!;

const fetchAllData = async () => {


    const res = await fetch(`${api_url}/getAllData?key=${api_key}`);

    const apiRes = await res.json();
    if (!res.ok) {
        return null
    }

    return apiRes
}



export { api_key, api_url, fetchAllData }