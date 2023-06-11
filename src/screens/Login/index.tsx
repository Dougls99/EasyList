import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Alert, StyleSheet, ImageBackground, } from 'react-native';

import Input from '../../components/Input';
import Title  from '../../components/Title'
import Button from '../../components/Button';
import { propsStack } from '../../routes';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

  const handleLogin = () => {
    if (validateEmail(email) && password.length >= 6 ) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  const navigation = useNavigation<propsStack>();

  const  handleSubscribe = () => {
    navigation.navigate('Subscribe');
  }

  return (
    <>
    <ImageBackground style={styles.background} source={require('../../images/background.jpg')} />
    <View style={styles.container}>
      
      <Title text='Easy List' />

        <Input
          onChange={setEmail}
          placeholder="Email"
          value={email}
        />

        <Input 
          onChange={setPassword}
          placeholder="Senha"
          value={password}
          secureText={true}
        />

      <Button action={handleLogin} value='Login' />

      <Button action={handleSubscribe} value='Registre-se' />
      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});