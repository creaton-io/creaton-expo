import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  GradientButton,
  Header,
  Separator,
  CustomOutlineInput,
} from '../../../components';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
// background: linear-gradient(119.05deg, #5A338E 0%, #37255F 15.23%, #281840 35.22%);

const UploadScreen = () => {
  return (
    <LinearGradient
      colors={['#5A338E', '#37255F', '#281840']}
      start={[0, 10]}
      style={{ height: '100%' }}
    >
      <View>
        <SafeAreaView />
        <Header />
        <View style={{ marginTop: '10%' }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 48,
              lineHeight: 56,
              letterSpacing: -0.02,
              color: 'white',
              alignSelf: 'center',
            }}
          >
            Sign Up
          </Text>
          <TouchableOpacity
            style={{
              height: 256,
              width: 256,
              borderRadius: 150,
              borderWidth: 1,
              borderStyle: 'dashed',
              borderColor: '#43E296',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '10%',
            }}
          >
            <AntDesign name='download' size={35} color='white' />
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: 'white',
                marginTop: 5,
              }}
            >
              Browse Photo
            </Text>
          </TouchableOpacity>
          <View style={{ alignSelf: 'center', marginTop: '5%' }}>
            <CustomOutlineInput
              title={'USERNAME'}
              placeholder={'Your username'}
            />
            <GradientButton
              buttonText='Sign Up'
              handleClick={() => {}}
              loading={false}
              disabled={false}
              width={335}
              height={48}
              gradient1={'#43E296'}
              gradient2={'#27B76F'}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default UploadScreen;
