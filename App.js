import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Screen, store } from './src';

export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}
