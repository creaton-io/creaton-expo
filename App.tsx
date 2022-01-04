import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Initial from './src/navigator/Initial';
import { Provider } from 'react-redux';
import { store } from './src/state';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Initial />
      </NavigationContainer>
    </Provider>
  );
}
