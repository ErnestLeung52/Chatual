import db from '../db/firestore';

export const fetchChats = () => {
  return db
    .collection('chats')
    .get()
    .then((snapshot) => {
      // data is provided under snapshot.docs
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });
      return data;
    });
};
