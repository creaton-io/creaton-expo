import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import WalletScreen from './screens/WalletScreen';
import CreateScreen from './screens/CreateScreen';
import CreatorScreen from './screens/CreatorScreen';
import SignUpScreen from './screens/SignUpScreen';
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home' size={24} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='search' size={24} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name='Create'
        component={CreateScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='add' size={24} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='wallet' size={24} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='person' size={24} color='black' />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ApplicationStack = () => {
  return (
    <Navigator initialRouteName='Home'>
      <Screen
        name='MainTabNavigator'
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name='Creator'
        component={CreatorScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name='SignUp'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default ApplicationStack;
