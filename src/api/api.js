import { CURRENT_WEATHER_DATA } from "./endpoints";
import Geocode from 'react-geocode';

export const Api = (() => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLocationType("ROOFTOP");

    const getCurrentWeatherData = async (lat, lon) => {
        let data = await fetch(CURRENT_WEATHER_DATA({lat, lon}))
        return data;
    }

    const getCurrentLocationAddress = async (lat, lon) => {
        let address;
        let response = await Geocode.fromLatLng(lat, lon);
        address = response.results[0].formatted_address;

        return address;
    }
    return {getCurrentWeatherData, getCurrentLocationAddress};
})();

export default Api;