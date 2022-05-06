import * as api from '../api/getChats';

// export function fetchChats() {
//   return async function (dispatch) {
//     const fetchedChats = await api.fetchChats();
//     // when dispatch -> reducer
//     dispatch({
//       type: 'CHATS_FETCH_SUCCESS',
//       fetchedChats,
//     });
//     return fetchedChats;
//   };
// }

export const fetchChats = () => (dispatch) =>
  api.fetchChats().then((fetchedChats) =>
    dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      fetchedChats,
    })
  );
