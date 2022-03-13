import { CURRENT_WEATHER_DATA } from "./endpoints";

export const Api = (() => {
    const getCurrentWeatherData = async () => {
        let lat  = -22.91246669699561;
        let lon = -43.227399796539956;
        let data = await fetch(CURRENT_WEATHER_DATA({lat, lon}))
        return data;
    }
    return {getCurrentWeatherData};
})()

export default Api;