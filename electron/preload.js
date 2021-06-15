const { contextBridge, ipcRenderer } = require('electron');
const {tempDetails} = require('../scripts/tempChecker');




contextBridge.exposeInMainWorld('electron', {
  // doThing: () => ipcRenderer.send('asynchronous-message', 'EUREKA'),

  getTemp: () => {
    // console.log(tempDetails());
    return tempDetails();

  },

  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    },
  },
  batteryApi: {},
  filesApi: {},
});
