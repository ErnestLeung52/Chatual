import React, { useEffect } from 'react';

import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';

import { useDispatch, useSelector } from 'react-redux';
import { fetchChats } from '../actions/chat';

export default function Home() {
  const dispatch = useDispatch();
  // state.chat from combined.reducer
  const chats = useSelector((state) => {
    console.log('state.chate ====', state);
    return state.chatsList.items;
  });

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    // <>
    //   <h1>{enhancedTitle}</h1>
    //   <button onClick={sendNotification}>Send Notification</button>
    // </>

    <div className='row no-gutters fh'>
      <div className='col-3 fh'>
        {/* ########## CHAT LIST START ############ */}
        {JSON.stringify(chats)}
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
