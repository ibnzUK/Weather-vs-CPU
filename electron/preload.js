const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  doThing: () => ipcRenderer.send('asynchronous-message', 'EUREKA'),

  notificationApi: {
    sendNotification(message) {
      console.log(message);
      ipcRenderer.send('notify', message);
    },
  },
  batteryApi: {},
  filesApi: {},
});
