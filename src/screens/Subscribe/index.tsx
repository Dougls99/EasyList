import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { propsStack } from '../../routes';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubscribe = () => {
    Alert.alert('Login bem-sucedido');
    setEmail('');
  };

  const navigation = useNavigation<propsStack>();

  const  handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
<>
    <ImageBackground style={styles.background} source={require('../../images/ft_subscribe.jpg')} />
    <View style={styles.container}>

      <Title text='Registre-se!' />
      
      <Input
        onChange={setEmail}
        placeholder='Digite seu email'
        value={email}
      />
      
      <Input
        onChange={setPassword}
        placeholder='Digite sua Senha'
        value={password}
      />

      <Button action={handleSubscribe} value='Inscrever-se!' />

      <Button action={handleLogin} value='Login' />

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
