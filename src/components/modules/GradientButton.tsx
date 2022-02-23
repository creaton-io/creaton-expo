import * as React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientChildProps {
  buttonText: string;
  handleClick: () => void;
  loading: boolean;
  disabled: boolean;
  width: number | string;
  height: number | string;
  gradient1: string;
  gradient2: string;
}

const GradientButton: React.FC<GradientChildProps> = ({
  buttonText,
  handleClick,
  loading = false,
  disabled,
  width,
  height,
  gradient1,
  gradient2,
}) => {
  return (
    <LinearGradient style={{ borderRadius: 8 }} colors={[gradient1, gradient2]}>
      <Pressable
        onPress={handleClick}
        disabled={disabled}
        style={{
          height: height,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <Text
            style={{
              color: 'white',
              fontWeight: '800',
              fontSize: 14,
              lineHeight: 17,
            }}
          >
            {buttonText}
          </Text>
        )}
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 17,
    color: 'white',
    alignSelf: 'center',
  },
});
export default GradientButton;
