import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View,
  Button,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components';
import { ThemeProvider } from 'react-native-ios-kit';
import tailwind from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


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
            color="purple"
            title="Sign Up With Email"
            accessibilityLabel="Email Button" 
          />

          <View style={tailwind('pt-20')}></View>
          

          <WCBtn
            onPress={WalletConnectButton}
            title="Sign Up With WalletConnect"
            color="black"
            buttonStyle={{backgroundColor:'red'}}
            accessibilityLabel="WalletConnect button"
          />
        
        </View> 
          
      </View>
    </SafeAreaView>
  );
}


function EmailButton({ navigation }) {
  // Navigate to Email Button
  navigation.navigate('EmailPage');
}

// Possible error
function WalletConnectButton({ navigation }) {
  // Navigate to WC Button
  navigation.navigate('WCPage');

}

let EmailBtn = styled.Button`

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
