import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../reducers/chats';

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  // reducer: a function to update state
  const store = createStore(
    // chatReducer default state is []
    combineReducers({
      chatsList: chatReducer,
    }),
    applyMiddleware(...middlewares)
  );

  return store;
}
