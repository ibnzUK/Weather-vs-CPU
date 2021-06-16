import { React, useState, useEffect } from 'react';

//getting temp from tempChecker
let fetchedTemperature = window.electron.getTemp();

const Cpu = () => {
  const [temp, setTemp] = useState(['Reading..']);

  const loadData = async () => {
    //updating cpu temp
    fetchedTemperature = await window.electron.getTemp();

    if (!fetchedTemperature[0]) {
    } else if (fetchedTemperature.length - 1 === undefined) {
    } else {
      setTemp(fetchedTemperature[fetchedTemperature.length - 1]);
    }
  };

  useEffect(() => {
    //starting temp monitoring every 1 sec
    const interval = setInterval(() => {
      loadData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h3>CPU Temperature {temp} °C</h3>
    </>
  );
};

export default Cpu;
