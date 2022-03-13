import { CURRENT_WEATHER_DATA } from "./endpoints";

export const Api = (() => {
    const getCurrentWeatherData = async (lat, lon) => {
        let data = await fetch(CURRENT_WEATHER_DATA({lat, lon}))
        return data;
    }
    return {getCurrentWeatherData};
})()

export default Api;