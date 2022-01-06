import React from 'react';
import { Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { Input } from 'react-native-elements';

interface InputChildProps {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: KeyboardTypeOptions;
  errorMessage?: string;
  width?: number | string;
}

const CustomInput: React.FC<InputChildProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  errorMessage,
  width,
}) => {
  return (
    <React.Fragment>
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        labelStyle={{ fontSize: 14 }}
        inputContainerStyle={{
          height: 50,
          width: width ? width : '100%',
          borderRadius: 10,
          borderBottomColor: 'white',
          backgroundColor: 'white',
        }}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.8,
    lineHeight: 19.1,
    marginLeft: 15,
  },
  errorText: {
    marginTop: -20,
    marginBottom: 20,
    marginLeft: '5%',
    fontSize: 12,
    lineHeight: 16.37,
    letterSpacing: 0.03,
    color: 'red',
    alignSelf: 'flex-start',
  },
});

export default CustomInput;
