import db from '../db/firestore';

export const fetchChats = () => {
  return db
    .collection('chats')
    .get()
    .then((snapshot) => {
      // console.log(snapshot.docs);
      // data is provided under snapshot.docs
      const data = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      // console.log(data);
      return data;
    });
};
