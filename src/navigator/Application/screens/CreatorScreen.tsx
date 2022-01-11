import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {
  Header,
  GradientButton,
  Separator,
  UserPost,
} from '../../../components';
import { LinearGradient } from 'expo-linear-gradient';

const CreatorScreen = () => {
  return (
    <LinearGradient colors={['#5A338E', '#37255F', '#281840']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView />
        <Header />
        <View style={{ backgroundColor: 'red', height: 112 }}></View>
        <View
          style={{
            backgroundColor: 'yellow',
            height: 128,
            width: 128,
            borderRadius: 100,
            alignSelf: 'center',
            position: 'absolute',
            top: 142,
          }}
        ></View>
        <View style={{ alignItems: 'center', marginTop: '20%' }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 24,
              lineHeight: 32,
              color: 'white',
            }}
          >
            Darrell Steward
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 24,
              letterSpacing: -0.02,
              color: '#9087A1',
            }}
          >
            I make crypto Videos!
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 16,
              color: '#FFFFFF',
              marginTop: 10,
            }}
          >
            $5 / month
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 1,
              width: 128,
              marginTop: 10,
              marginBottom: 10,
              opacity: 0.2,
            }}
          />
          <Text
            style={{
              fontWeight: '800',
              fontSize: 16,
              lineHeight: 17,
              letterSpacing: -0.04,
              color: '#FFFFFF',
            }}
          >
            12
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 20,
              color: '#D4D1E1',
              opacity: 0.6,
            }}
          >
            followers
          </Text>
          <Separator height={10} />
          <GradientButton
            buttonText='Subscribe'
            handleClick={() => console.log('click')}
            loading={false}
            disabled={false}
            height={48}
            width={153}
            gradient1={'#9C56C3'}
            gradient2={'#4F31AE'}
          />
        </View>
        <Separator height={30} />
        <View style={{ alignItems: 'center' }}>
          <UserPost />
          <Separator height={10} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreatorScreen;
