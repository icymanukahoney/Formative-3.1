import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Puff} from 'react-loader-spinner'
//Font awesome Icon
import { FaMapMarkerAlt } from 'react-icons/fa';
import { WiCelsius } from 'react-icons/wi';



// The Api key hidden inside of our env file
const weatherKey = import.meta.env.VITE_YOUR_API_KEY_2

const Weather = () => {
    //state declaration for the weather
    const [weather, setWeather] = useState(null)

    //state declaration for loaction 
    const [location, setLocation] = useState('Christchurch')

    //State declaration for Loading
    const [loading, setLoading] = useState(true)

    //useEffect - wrap the Api call and control the render

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true)
            try{
                const response = await axios.get (
                `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${location}`
                )
                console.log(response.data)
                setWeather(response.data)
                setLoading(false)
            } catch(error) {
                console.log(error);
                setLoading(false)
            }
        }
        fetchWeather()
    }, [location])

    //Functiion to handle location change on user input 
    //const handleLocationChange = (event) => {
       // setLocation(event.target.value)
    //}

    const handleLocationChange = () => {
        // This function will be called when the button is clicked
        // It will set the location state with the value from the input field
        const inputLocation = document.getElementById('locationInput').value;
        setLocation(inputLocation);
      };

  return (
    <div className='weather-container-info'>
      {loading ? (
<Puff color='#00BFFF' height ={100} width ={100}/>
      ) : (
        <>
        <div className='left-content'>
        <div className='location-container'>
            <FaMapMarkerAlt />
            <input
              type='text'
              id='locationInput'
              defaultValue={location}
            />
            
          </div>

        <div className='temp-container'>
        <WiCelsius />
        {weather?.current?.temp_c} °C
        </div>

        <div className='condition-container'>
            {weather?.current?.condition.text}
          </div>

          <div className='additional-info'>
                <p>Humidity: {weather?.current?.humidity}%</p>
                <p>Visibility: {weather?.current?.vis_km} km</p>
                <p>Wind Speed: {weather?.current?.wind_kph} km/h</p>
                <p>Wind Direction: {weather?.current?.wind_dir}</p>
                <p>Precipitation: {weather?.current?.precip_mm} mm</p>
                <p>Local Time: {weather?.location?.localtime}</p>
              </div>
              </div>
              <button className='weather-button' onClick={handleLocationChange}>SHOW WEATHER</button>

        </>
      )}
    </div>
  )
}

export default Weather
