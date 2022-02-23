import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Header,
  CustomOutlineInput,
  GradientButton,
  Separator,
} from '../../../components';

const SignUpScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#5A338E', '#37255F', '#281840']}
      style={{ height: '100%' }}
    >
      <SafeAreaView />
      <Header />
      <Separator height={'5%'} />
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 48,
            lineHeight: 56,
            letterSpacing: -0.02,
            color: '#FFFFFF',
          }}
        >
          Sign Up
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 22,
            color: '#D4D1E1',
            opacity: 0.6,
          }}
        >
          Please signup first. Your are not a creator yet.
        </Text>
        <View style={{ marginTop: '10%' }}>
          <CustomOutlineInput title={'BIO'} placeholder={'Artist/Painter'} />
          <CustomOutlineInput
            title={'SUBSCRIPTION PRICE PER MONTH'}
            placeholder={'$5'}
          />
          <CustomOutlineInput
            title={'COLLECTION NAME'}
            placeholder={'My beautiful NFT creations'}
          />
          <CustomOutlineInput
            title={'COLLECTION SYMBOL'}
            placeholder={'MYART'}
          />
          <GradientButton
            buttonText='Become a Creator'
            handleClick={() => navigation.navigate('Upload')}
            loading={false}
            disabled={false}
            width={335}
            height={48}
            gradient1={'#43E296'}
            gradient2={'#27B76F'}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUpScreen;
