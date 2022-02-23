import axios from 'axios';


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '69cfed012emsh9d500083783d80bp1d9468jsna0e520d46c86'
    }
};

export const getPlacesData = async ({ sw, ne }) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '69cfed012emsh9d500083783d80bp1d9468jsna0e520d46c86'
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}


