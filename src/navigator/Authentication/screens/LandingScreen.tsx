import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Separator, Button } from '../../../components';

type RootStackParamList = {
  Landing: undefined;
};

interface PageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Landing'>;
  navigate: (Route: string) => void;
}

const LandingScreen = ({ navigation }: PageProps) => {
  return (
    <ImageBackground
      source={require('../../../../assets/luke-chesser-hQo6Uyo4nBg-unsplash.jpg')}
      style={styles.imgBackground}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <Image
            source={require('../../../../assets/creatonborder.png')}
            style={styles.image}
          />
          <View style={styles.tagContainer}>
            <Text style={styles.headerText}>Connect Directly</Text>
            <Text style={styles.subText}>
              Engage Fans, Build an Unstoppable Income
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            handleClick={() => navigation.navigate('EmailSignUp')}
            buttonText='Sign Up With Email'
            disabled={false}
            backgroundColor={'#4338ca'}
          />
          <Separator height={15} />

          <Button
            handleClick={() => console.log('clicked')}
            buttonText='Sign Up With Walletconnect'
            disabled={false}
            backgroundColor={'#E0D7D7'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    marginBottom: '20%',
    alignItems: 'center',
  },
  subText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  headerText: { color: 'white', fontSize: 35, fontWeight: '700' },
  tagContainer: { alignItems: 'center', marginTop: '30%' },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: '25%',
  },
  imgBackground: { width: '100%', height: '100%' },
});

export default LandingScreen;
