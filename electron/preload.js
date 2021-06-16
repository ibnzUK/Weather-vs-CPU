const { contextBridge, ipcRenderer } = require('electron');
const { tempDetails } = require('../scripts/tempChecker');

contextBridge.exposeInMainWorld('electron', {

  // doThing: () => ipcRenderer.send('asynchronous-message', 'EUREKA'),

  getTemp: () => {
    return tempDetails();
  },

  //experimental notifications
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    },
  },

  batteryApi: {},
  filesApi: {},
});
