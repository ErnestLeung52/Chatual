import React from 'react';
import { Provider } from 'react-redux';
// import { ipcRenderer } from 'electron'; // Not secure

import { HashRouter as Router, Switch, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomeView from './views/Home';
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';
import ChatView from './views/Chat';

import configureStore from './store';

const store = configureStore();

export default function App() {
  // debugger;
  // const sendNotification = () => {
  //   // alert('Clicked');
  //   // ipcRenderer.send('notify', 'Click FIREDDD'); // Not Secured
  //   // window.sendNotification('Click FIRRRRRRREDDDDDDD');
  //   electron.notificationAPI.sendNotification('Click FIREDDDD Again🔥');
  // };

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          {/* <button onClick={sendNotification}>notify</button> */}
          <Routes>
            <Route path='/' exact element={<WelcomeView />} />
            <Route path='/chat/:id' element={<ChatView />} />
            <Route path='/settings' element={<SettingsView />} />
            <Route path='/home' element={<HomeView />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
