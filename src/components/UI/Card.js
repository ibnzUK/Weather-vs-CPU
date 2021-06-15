import { React, useState, useEffect } from 'react';
import Weather from '../Weather';
import classes from './Card.module.css';

let fetchedTemperature = window.electron.getTemp();

const Card = () => {
  const [temp, setTemp] = useState(['Reading..']);

  const loadData = async () => {
    fetchedTemperature = await window.electron.getTemp();

    if (!fetchedTemperature[0]) {
      // setTemp(['Reading..']);
    } else if (fetchedTemperature.length - 1 === undefined) {
      // setTemp(['Reading..']);
    } else {
      //all good set temp to this val
      setTemp(fetchedTemperature[fetchedTemperature.length - 1]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loadData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div className={classes.Card}>
      <div className={classes.CardShape}>
        <button
          onClick={() => {
            // window.electron.notificationApi.sendNotification('getting CPU Temperature');
            // console.log(  window.electron.getTemp());
            loadData();
          }}
        >
          Update Temperature and Weather
        </button>
        <button
          onClick={() => {
            // window.electron.doThing();
            window.electron.notificationApi.sendNotification('getting CPU Temperature');
          }}
        >
          Stop Monitoring
        </button>

        <h1>Weather vs CPU</h1>
        <br></br>
        <div>
          <Weather place={['London', '']} />
          <h3>CPU temperature: {temp} C</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
