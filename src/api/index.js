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

export const getPlacesData = async ({ sw, ne }, type) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getWeatherData = async ({ lat, lng }) => {
    try {
        console.log('lat',lat, lng);
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
            params: {
                lat: lat,
                lon: lng,
            },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            }
        });
        return data;
    } catch (error) {
        console.log(error);
    }

}


