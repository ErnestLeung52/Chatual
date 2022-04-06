import React from 'react';
// import { ipcRenderer } from 'electron'; // Not secure

import { HashRouter as Router, Switch, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomeView from './views/Home';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';
import ChatView from './views/Chat';

export default function App() {
  //   debugger;
  //   const sendNotification = () => {
  //     alert('Clicked');
  //     ipcRenderer.send('notify', 'Click FIREDDD'); // Not Secured
  //     window.sendNotification('Click FIRRRRRRREDDDDDDD');
  //     electron.notificationAPI.sendNotification('Click FIREDDDD Again🔥');
  //   };

  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/chat/:id' element={<ChatView />} />
          <Route path='/settings' element={<SettingsView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/register' element={<RegisterView />} />
          <Route path='/' element={<HomeView />} />
        </Routes>
      </div>
    </Router>
  );
}
