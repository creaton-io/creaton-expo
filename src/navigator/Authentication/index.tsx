import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import EmailSignUpScreen from './screens/EmailSignUpScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Navigator initialRouteName='Landing'>
      <Screen
        name='Landing'
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name='EmailSignUp'
        component={EmailSignUpScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default AuthenticationStack;
