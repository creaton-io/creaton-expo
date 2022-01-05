import React from 'react';
import { 
    StyleSheet,
    Text, 
    View,
    Button,
    SafeAreaView,
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletConnectProvider from '@walletconnect/react-native-dapp';

class WCPage extends React.Component {
    render() { 
        return(
            <WalletConnectProvider
                bridge="https://bridge.walletconnect.org"
                clientMeta={{
                    description: 'Connect with WalletConnect',
                    url: 'https://walletconnect.org',
                    icons: ['https://walletconnect.org/walletconnect-logo.png'],
                    name: 'WalletConnect',
                }}
                redirectUrl={Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'}
                storageOptions= {{
                    asyncStorage: AsyncStorage as any,
                }}>
                
            </WalletConnectProvider>
        );
    }
}


