// Specify API for renderer processor; specify functions to be available for App.js
// Specify to run this script in main.js -> no contact isolation

const { ipcRenderer, contextBridge } = require('electron');
// import { ipcRenderer, contextBridge } from 'electron';

// In the windows context we can access sendNotif, also in app.js file
// window.sendNotification = (message) => {
//   //   console.log(window.notSecure);
//   ipcRenderer.send('notify', message);
// };

contextBridge.exposeInMainWorld('electron', {
  notificationAPI: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    },
  },
  // Other API: {...}
});
