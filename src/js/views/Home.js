import React from 'react';

import Navbar from '../components/Navbar';
import JoinedChats from '../components/JoinedChats';
import AvailableChats from '../components/AvailableChats';
import ViewTitle from '../components/shared/ViewTitle';

export default function Home() {
  return (
    // <>
    //   <h1>{enhancedTitle}</h1>
    //   <button onClick={sendNotification}>Send Notification</button>
    // </>

    <div className='content-wrapper'>
      {/* ########## NAVBAR START ############ */}
      <Navbar />

      <div className='row no-gutters fh'>
        <div className='col-3 fh'>
          {/* ########## CHAT LIST START ############ */}
          <JoinedChats />
        </div>

        <div className='col-9 fh'>
          {/* ########## CHAT NAME CONTAINER START ############ */}
          <ViewTitle />

          {/* ########## CHAT LIST START ############ */}
          <AvailableChats />
        </div>
      </div>
    </div>
  );
}
