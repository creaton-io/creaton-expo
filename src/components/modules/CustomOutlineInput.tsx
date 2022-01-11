import React from 'react';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import SignUpScreen from '../../navigator/Application/screens/SignUpScreen';

const CustomOutlineInput = () => {
  return (
    <React.Fragment>
      <Text
        style={{
          marginLeft: 10,
          marginBottom: 5,
          fontWeight: '400',
          fontSize: 11,
          lineHeight: 16,
          color: '#FFFFFF',
        }}
      >
        BIO
      </Text>
      <Input
        placeholder='Artist/Painter'
        style={{ paddingLeft: 10 }}
        inputContainerStyle={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          height: 48,
          width: 335,
          borderRadius: 8,
          borderColor: '#7B8496',
        }}
      />
    </React.Fragment>
  );
};

export default CustomOutlineInput;
