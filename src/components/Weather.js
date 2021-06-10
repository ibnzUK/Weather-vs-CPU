import React, { useState, useEffect } from 'react';

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState('Loading data');
  const [temp, setTemp] = useState(' .');
  const [location, setLocation] = useState(['loading . . ', '.']);
  const Place = props.place;
  const API_Key = process.env.REACT_APP_API_KEY;
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${Place[0]},${Place[1]}&APPID=${API_Key}&&units=metric`;
  

  const loadData = async () => {
    fetch(API_URL)
      .then((response) => {
        //getting response for error better handling
        return response.json();
      })
      .then((data) => {
        // getting fetched data and storing to state
        setWeatherData(data);
        setTemp(data.main.temp);
        setLocation([data.name, data.sys.country]);
      })
      .catch((err) => {
        // Do something for an error here
        console.log('Error Reading data ' + err);
      });
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(weatherData);
  return (
    <div>
      <h2>
        {`${location[0]} ${location[1]} ${temp}`}
        <span> &#8451;</span>
      </h2>
    </div>
  );
};

export default Weather;
