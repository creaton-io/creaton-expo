import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { CustomInput, Separator, Button } from '../../../components';
import Helpers from '../../../utils/Helpers';

const EmailSignUpScreen = () => {
  const [form, setForm] = useState({
    email: {
      value: '',
      validators: [(value: string) => !!value],
      errorMessage: '',
      errorMessages: ['Email cannot be blank'],
    },
    retypeEmail: {
      value: '',
      validators: [(value: string) => !!value],
      errorMessage: '',
      errorMessages: ['Email cannot be blank'],
    },
  });

  return (
    <ImageBackground
      source={require('../../../../assets/luke-chesser-hQo6Uyo4nBg-unsplash.jpg')}
      style={styles.imgBackground}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3, marginTop: '50%', alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: '700', color: 'white' }}>
            Enter Your Email
          </Text>
          <Separator height={'35%'} />
          <CustomInput
            placeholder='Email'
            errorMessage={form.email.errorMessage}
            autoCapitalize='none'
            value={form.email.value}
            onChangeText={(value: string) =>
              Helpers.handleInputChange({ key: 'email', value, setForm })
            }
          />

          <CustomInput
            placeholder='Retype Email'
            errorMessage={form.retypeEmail.errorMessage}
            autoCapitalize='none'
            value={form.retypeEmail.value}
            onChangeText={(value: string) =>
              Helpers.handleInputChange({ key: 'retypeEmail', value, setForm })
            }
          />
        </View>

        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: '10%',
          }}
        >
          <Button
            handleClick={() => console.log('test')}
            buttonText='SUBMIT'
            loading={false}
            disabled={false}
            backgroundColor={'#F87575'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: { width: '100%', height: '100%' },
});

export default EmailSignUpScreen;
