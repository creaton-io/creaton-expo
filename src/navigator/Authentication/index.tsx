import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthenticationStack = () => {
  return (
    <Navigator initialRouteName='Landing'>
      <Screen
        name='Landing'
        component={LandingScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default AuthenticationStack;
