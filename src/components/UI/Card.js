import React from 'react';
import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardShape}>
        <h1>Weather vs CPU</h1>
        <br></br>
        <div>
          <h4>Current temp: 18.1 C</h4>
          <h3>CPU temperature: 39 C</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
