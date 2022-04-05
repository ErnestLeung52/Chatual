import React from 'react';
// import { ipcRenderer } from 'electron'; // Not secure

import HomeView from './views/Home';

export default function App() {
  //   debugger;

  //   const sendNotification = () => {
  //     alert('Clicked');
  //     ipcRenderer.send('notify', 'Click FIREDDD 🔥'); // Not Secured
  //     window.sendNotification('Click FIRRRRRRREDDDDDDD🔥');
  //     electron.notificationAPI.sendNotification('Click FIREDDDD Again🔥');
  //   };

  return <HomeView />;
}
