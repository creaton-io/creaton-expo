import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components';


export default function App() {
  return (
    <SafeAreaView>
      <View>
        <LogoImg source={require('./assets/creatonborder.png')} alt="logo" />
      </View>
    </SafeAreaView>
  );
}

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
