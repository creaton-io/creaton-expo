import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import Icons from '../../icons';
import GradientButton from './GradientButton';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ marginLeft: 10, flexDirection: 'row' }}>
        <Pressable>
          <Icons.MenuIcon />
        </Pressable>
        <View style={{ marginLeft: 15 }}>
          <Icons.LogoIcon />
        </View>
        <View style={{ marginLeft: '38%' }}>
          <GradientButton
            buttonText='Sign Up'
            handleClick={() => navigation.navigate('SignUp')}
            loading={loading}
            disabled={loading}
            width={92}
            height={33}
            gradient1={'#43E296'}
            gradient2={'#27B76F'}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
