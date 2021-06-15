import React from 'react';
import Weather from '../Weather';
import Cpu from '../Cpu';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardShape}>
        <button
          onClick={() => {
            // window.electron.notificationApi.sendNotification('getting CPU Temperature');
            // console.log(  window.electron.getTemp());
          }}
        >
          Update Temperature and Weather
        </button>
        <button
          onClick={() => {
            // window.electron.doThing();
            window.electron.notificationApi.sendNotification(
              'getting CPU Temperature'
            );
          }}
        >
          Stop Monitoring
        </button>

        <h1>Weather vs CPU</h1>
        <br></br>
        <div>
          <Weather place={['London', '']} />
          <Cpu />
        </div>
      </div>
    </div>
  );
};

export default Card;
