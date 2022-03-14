import { CURRENT_WEATHER_DATA } from "./endpoints";
import Geocode from 'react-geocode';

export const Api = (() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLocationType("ROOFTOP");

    const getCurrentWeatherData = async (lat, lon) => {
        let data;
        try {
        data = await fetch(CURRENT_WEATHER_DATA({lat, lon}))
        } catch (e) {
            console.log('error:', e);
        }
        return data;
    }

    const getCurrentLocationAddress = async (lat, lon) => {
        let address;
        let response;
        try { 
            response = await Geocode.fromLatLng(lat, lon);
        } catch (e) {
            console.log('error:', e);
        }
        address = response?.results[0]?.formatted_address || null;

        return address;
    }
    return {getCurrentWeatherData, getCurrentLocationAddress};
})();

export default Api;