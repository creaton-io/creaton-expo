import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View,
  Button,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import tailwind from 'tailwind-rn';


export default function App() {
  return (
    <SafeAreaView>
      <View>
        <LogoImg source={require('./assets/creatonborder.png')} alt="logo" />
        {/* Add 2 buttons  */}

        <View style={tailwind('pt-80')}></View>

        <View>

          <EmailBtn
            onPress={EmailButton}
            title="Sign Up With Email"
            color="#841584"
            accessibilityLabel="Email Button" 
          />
          

          <WCBtn
            onPress={WalletConnectButton}
            title="Sign Up With WalletConnect"
            color="black"
            accessibilityLabel="WalletConnect button"
          />
        
        </View> 
          
      </View>
    </SafeAreaView>
  );
}


function EmailButton() {

}

function WalletConnectButton() {

}

let EmailBtn = styled.Button`
  padding-bottom:
`;

let WCBtn = styled.Button``;


let LogoImg = styled.Image`
  margin-top: 50px;
  margin-left: 130px;
  height: 140px;
  width: 110px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
