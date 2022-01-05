import React from 'react';
import { Text, Pressable, ActivityIndicator, View } from 'react-native';

interface ButtonInterface {
  buttonText: string;
  handleClick: () => void;
  loading?: boolean;
  disabled: boolean;
  backgroundColor: string;
}

const Button = ({
  handleClick,
  backgroundColor,
  buttonText,
  loading = false,
  disabled,
}: ButtonInterface) => {
  return (
    <Pressable
      onPress={handleClick}
      style={{
        height: 50,
        width: 350,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      }}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <View>
          <Text style={{ color: 'white', fontWeight: '500' }}>
            {buttonText}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default Button;
