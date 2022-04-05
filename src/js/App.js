import React from 'react';
// import { ipcRenderer } from 'electron'; // Not secure

export default function App() {
  //   debugger;
  const title = 'Contractual GOD APP';
  const enhancedTitle = title + ' - React App!';

  const sendNotification = () => {
    // alert('Clicked');
    // ipcRenderer.send('notify', 'Click FIREDDD 🔥'); // Not Secured
    // window.sendNotification('Click FIRRRRRRREDDDDDDD🔥');
    electron.notificationAPI.sendNotification('Click FIREDDDD Again🔥');
  };

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </>
  );
}
