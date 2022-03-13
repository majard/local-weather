import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './api'

function App() {
  let [data, setData] = useState();
  let [loading, setLoading] = useState(true);

  async function getCurrentWeatherData(){
    let apiData;
    setLoading(true);
    try {
      let response = await Api.getCurrentWeatherData();
      if (response.ok) apiData = await response.json();
      setData(apiData);
    } catch (e){
      console.log(e);
    } finally {
      setLoading(false);
    }

  }
  useEffect(() => {
    getCurrentWeatherData();
  },
  []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
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
