import React from 'react';
import Weather from '../Weather';
import Cpu from '../Cpu';
import Footer from '../Footer';
import classes from './Card.module.css';

const Card = () => {
  //Change Your Town for accutrate temperature

  // let myTown = 'London';
  let myTown = 'Lowestoft';


  return (
    <div className={classes.Card}>
      <div className={classes.CardShape}>
     
        {/* <button
          onClick={() => {
            //accessing backend function
            window.electron.doThing();

            //sending windows notifications
            window.electron.notificationApi.sendNotification(
              'getting CPU Temperature'
            );
          }}
        >
         Notifications and backend communication
        </button> */}

        <h1>Weather vs CPU</h1>
        <br></br>
        <div>
          <Weather place={[myTown, '']} />
          <Cpu />
        </div>
      </div>
        <div className={classes.Info}><p> Optimal CPU Temperature: Idle 45°C - 65°C, Heavy Load 70°C - 95°C </p></div>
        <div className={classes.Foot}>
          <Footer/>
        </div>
    </div>
  );
};

export default Card;
