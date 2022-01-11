import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Initial from './src/navigator/Initial';
import { Provider } from 'react-redux';
import { store } from './src/state';
//import { withWalletConnect } from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Initial />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// export default withWalletConnect(App, {
//   clientMeta: {
//     description: 'Connect with WalletConnect',
//   },
//   redirectUrl:
//     Platform.OS === 'web' ? window.location.origin : 'exp://127.0.0.1:19000',
//   storageOptions: {
//     asyncStorage: AsyncStorage,
//   },
// });
