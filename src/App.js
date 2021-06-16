import React from 'react';
import Waves from './components/UI/Waves';
import Card from './components/UI/Card';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.App}>
      <Waves />
      <Card />
    </div>
  );
};

export default App;
