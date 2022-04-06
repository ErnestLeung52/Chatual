import React from 'react';

import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';

export default function Home() {
  return (
    // <>
    //   <h1>{enhancedTitle}</h1>
    //   <button onClick={sendNotification}>Send Notification</button>
    // </>

    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        {/* ########## CHAT LIST START ############ */}
        <JoinedChatsList />
      </div>

      <div className='col-9 fh'>
        {/* ########## CHAT NAME CONTAINER START ############ */}
        <ViewTitle text='Choose your channel' />

        {/* ########## CHAT LIST START ############ */}
        <AvailableChatsList />
      </div>
    </div>
  );
}
