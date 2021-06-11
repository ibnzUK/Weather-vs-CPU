const si = require('systeminformation');

//helper node function to get cpu information
async function cpuData() {
  try {
    const data = await si.cpu();
    console.log('CPU Information:', data);
  } catch (e) {
    console.log(e);
  }
}

cpuData();
module.exports = cpuData;
