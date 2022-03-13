import t from 'lodash.template';
export const API_KEY =  process.env.REACT_APP_OPEN_WEATHER_API_KEY;
export const BASE_URL = 'http://api.openweathermap.org/data/2.5'
export const CURRENT_WEATHER_DATA = t(`${BASE_URL}/weather?lat=\${lat}&lon=\${lon}&appid=${API_KEY}`)