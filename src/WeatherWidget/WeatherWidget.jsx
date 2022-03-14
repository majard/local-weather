import { useCallback, useEffect } from 'react';
import Cloudy from '../assets/weatherIcons/animated/cloudy.svg';
import Thunder from '../assets/weatherIcons/animated/thunder.svg';
import Drizzle from '../assets/weatherIcons/animated/rainy-4.svg';
import Rainy from '../assets/weatherIcons/animated/rainy-6.svg';
import Snowy from '../assets/weatherIcons/animated/snowy-6.svg';
import Clear from '../assets/weatherIcons/animated/day.svg';
import CrazyWeather from '../assets/weatherIcons/animated/weather.svg';

export default function WeatherWidget({condition, description}) {
    let weatherIcon;

    switch (condition) {
        case 'Thunderstorm':
            weatherIcon = Thunder;
            break
        case 'Drizzle':
            weatherIcon = Drizzle;
            break
        case 'Rain':
            weatherIcon = Rainy;
            break        
        case 'Snow':
            weatherIcon = Snowy;
            break
        case 'Clear':
            weatherIcon = Clear;
            break            
        case 'Clouds':
            weatherIcon = Cloudy;
            break
        default:
            weatherIcon = CrazyWeather;
    }
    return (<img src={weatherIcon} alt={description}/>);
}