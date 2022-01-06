import * as React from 'react';
import {
    withWalletConnect,
    useWalletConnect,
} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    StyleSheet,
    Text, 
    View,
    Button,
    SafeAreaView,
    Platform,
} from 'react-native';

// This wraps the app in a WC provider for us 
function WCWalletPage(): JSX.Element {
    const connector = useWalletConnect(); // valid

    if (!connector.connected) {
        // Then we need to connect!
        return <Button title="Connect" onPress={() => connector.connect()} />;
    }

    return <Button title="Kill Session" onPress={() => connector.killSession()} />;
  }
  
  export default withWalletConnect(WCWalletPage, {
    clientMeta: {
      description: "Connect with WalletConnect",
    },
    redirectUrl:
      Platform.OS === "web" ? window.location.origin : "yourappscheme://",
    storageOptions: {
      asyncStorage: AsyncStorage,
    },
  });
















