const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

//getting date for filename
let date_ob = new Date();
let date = ('0' + date_ob.getDate()).slice(-2);
let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let fileExist = false;

//constructing name  OpenHardwareMonitorLog-2021-06-14
let fileName = `OpenHardwareMonitorLog-${year}-${month}-${date}.csv`;

//need to get this name for non intel CPU
let optionFromCSV = '/intelcpu/0/temperature/0';

//init value
let currentTemp = ['Reading CPU Temperature ....'];

//csv Log cleaner
const deleteLogs = () => {
  if (fileExist) {
    fs.unlinkSync(path.join(__dirname, fileName));
    //file removed
  } else {
  }
};

//reading csv file
const fetchData = () => {
  if (fileExist) {
    fs.createReadStream(path.join(__dirname, fileName))
      .pipe(csv())
      .on('data', (row) => {
        currentTemp.push(row[optionFromCSV]);
        // const column_two = records.map(rec => rec["GPU Core"]);
      })
      .on('end', () => {
        return currentTemp;
      });
  } else {
    return currentTemp;
  }
};
//checking if logging been activated
function logTimer() {
  checkIfFileExist();
  if (fileExist) {
    fetchData();
  } else {
    checkIfFileExist();
  }
  setTimeout(logTimer, 1000);
}
setTimeout(logTimer, 1000);

//deleting log files every minute
function deleteTimer() {
  if (fileExist) {
    deleteLogs();
  } else {
  }
  setTimeout(deleteTimer, 60000);
}
setTimeout(deleteTimer, 60000);

const checkIfFileExist = () => {
  if (fs.existsSync(path.join(__dirname, fileName))) {
    fileExist = true;
    fetchData();
  } else {
    currentTemp = [];
    fileExist = false;
  }
};

//when all done returning temperature details
const tempDetails = () => {
  return currentTemp;
};

module.exports = { tempDetails };
