import React from 'react';
import { RainbowButton } from '@rainbow-me/rainbow-button';

// Note: This will enable people to connect to ...
// ... Creaton with their Rainbow wallets.

// Rainbow Button component
class RainbowBtn extends React.Component {
    render() {
        return(
            <RainbowButton
                chainId={1}
                connectorOptions={{ bridge: 'https://bridge.walletconnect.org' }}
                onConnectorInitialized={(connector) => console.log(connector)}
            />
        );
    }
}
