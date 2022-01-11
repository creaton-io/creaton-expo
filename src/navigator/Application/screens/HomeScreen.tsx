import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icons from '../../../icons';
import { GradientButton, Header } from '../../../components';
import { Input } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={{ backgroundColor: '#3A2762', height: '100%' }}>
      <SafeAreaView />
      <Header />
      <View style={{ marginTop: '10%' }}>
        <Input
          placeholder='Search'
          inputContainerStyle={{
            height: 50,
            borderRadius: 8,
            borderBottomWidth: 3,
            borderTopWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderColor: 'black',
          }}
          style={{
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 16,
            color: '#D4D1E1',
            paddingLeft: 15,
          }}
          rightIcon={<Ionicons name='search' size={24} color='#D4D1E1' />}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            height: 100,
            width: 359,
            backgroundColor: 'white',
            borderRadius: 13,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'red',
              height: 60,
              width: 60,
              borderRadius: 100,
              marginLeft: 10,
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text>Creaton</Text>
            <Text>89 Followers</Text>
            <Text>$6 / month</Text>
          </View>
          <View style={{ marginLeft: '8%' }}>
            <GradientButton
              buttonText='Subscribe'
              handleClick={() => navigation.navigate('Creator')}
              loading={loading}
              disabled={loading}
              height={33}
              width={104}
              gradient1={'#9C56C3'}
              gradient2={'#4F31AE'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
