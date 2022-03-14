import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Api from './api';
import WeatherWidget from './WeatherWidget';


function App() {
  let [data, setData] = useState();
  let [loading, setLoading] = useState(true);
  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();
  let [address, setAddress] = useState();

  const getLocation = useCallback(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation, geolocationFailed);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []); 

  function setLocation(position) {    
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  function geolocationFailed(){
    alert("Couldn't get your location from browser!");
  }

  const getCurrentWeatherData = useCallback(async ()=>{
    if (!latitude || !longitude) return;
    let apiData;
    setLoading(true);
    try {
      let response = await Api.getCurrentWeatherData(latitude, longitude);
      if (response.ok) apiData = await response.json();
      setData(apiData);
    } catch (e){
      console.log(e);
    } finally {
      setLoading(false);
    }

  },[latitude, longitude]);

  useEffect(() => {
    getLocation();
  },
  [getLocation]);
  
  useEffect(() => {
    getCurrentWeatherData();
  },
  [getCurrentWeatherData, latitude, longitude]);

  
  useEffect(() => {
    async function getAddress(){
      if (!latitude || !longitude) return false;
      const currentAddress = await Api.getCurrentLocationAddress(latitude, longitude);
      setAddress(currentAddress);
    }
    getAddress();
  },
  [latitude, longitude]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Local Weather App
        </h1>
      </header>      
      <div className='content'>
        {latitude && longitude && (<p> latitude: {latitude} longitude: {longitude} </p>)}
        {!loading && <div> <p>A temperatura atual é {data.main.temp} C°</p> <p> O tempo está {data.weather[0].main} </p></div>}
        {!loading && address && (<p>Seu endereço atual é {address}</p>)}
        <WeatherWidget condition={data.weather[0].main} description={data.weather[0].description} />
      </div>
    </div>
  );
}

export default App;
