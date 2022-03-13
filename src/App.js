import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './api'

function App() {
  let [data, setData] = useState();
  let [loading, setLoading] = useState(true);
  let [latitude, setLatitude] = useState();
  let [longitude, setLongitude] = useState();

  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function setLocation(position) {    
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  async function getCurrentWeatherData(){
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

  }
  useEffect(() => {
    getLocation();
  },
  []);
  
  useEffect(() => {
    getCurrentWeatherData();
  },
  [latitude, longitude]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        {latitude && longitude && (<p> latitude: {latitude} longitude: {longitude} </p>)}
        {!loading && data.main.temp}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
