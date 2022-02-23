import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <View style={{ alignItems: 'center', marginTop: '20%' }}>
        <Image
          source={require('../../../../assets/avatar.png')}
          style={{ height: 100, width: 100 }}
        />
        <Text style={{ marginTop: 15 }}>John Martin (0x1234234534534)</Text>
        <Text style={{ marginTop: '25%' }}>Balance</Text>
        <Text style={{ marginTop: '25%' }}>Subscriptions</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
