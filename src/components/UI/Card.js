import React from 'react';
import Weather from '../Weather';
import classes from './Card.module.css';



const Card = () => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardShape}>
        <h1>Weather vs CPU</h1>
        <br></br>
        <div>
          <Weather place={['london', 'uk']}/>
          <h3>CPU temperature: 39 C</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
