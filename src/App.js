import React from 'react';
import Footer from './components/Footer';
import Waves from './components/UI/Waves';
import Card from './components/UI/Card';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.App}>
      <Waves />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
