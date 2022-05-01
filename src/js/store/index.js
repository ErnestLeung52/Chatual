import { createStore } from 'redux';

export default function configureStore() {
  const store = createStore(() => {
    return {
      message: 'Hello World',
      data1: 'contractual',
      data1: 'da best',
    };
  });

  return store;
}
