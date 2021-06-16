import { React, useState, useEffect } from 'react';

let fetchedTemperature = window.electron.getTemp();

const Cpu = () => {
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
    <>
      <h3>
        CPU Temperature {temp} °C
      </h3>
    </>
  );
};

export default Cpu;
