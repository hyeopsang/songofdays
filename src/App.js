import './App.css';
import { useEffect, useState} from "react";
import Main from './component/Main';
import Weather from './component/Weather';


function App() { 
  const [weather, setWeather] = useState(null);
    const [id, setId] = useState();
    useEffect(() => {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=490c52f56a6bf0017c11a799a9a00698&units=metric`;
          
          getweatherByCurrentLocation(url);
        });
    }, []);

    const getweatherByCurrentLocation = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        console.log('데이터 확인!', data);
        setWeather(data);
        setId(data.weather[0].id);
    };

    const [timer, setTimer] = useState("00:00:00");

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        setTimer(`${hours}:${minutes}:${seconds}`)
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
    }

    startTimer()
    
    
  return (
    <div className="App">
      <h2>{weather?.name}</h2>
      <div>{timer}</div>
      <Main weather={weather} />
      <Weather weather={weather} id={id} />
    </div>
  );
}

export default App;
