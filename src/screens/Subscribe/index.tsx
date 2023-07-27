import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import { propsStack } from '../../routes';

import { auth } from "../../dataBase/firebase";

import Title from '../../components/Title';
import { InputLogin, InputSenha } from '../../components/Inputs';
import Button from '../../components/Button';

export const SubscribeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email) && password.length >= 6 ) {
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: { user: any; }) => {
        const user = userCredential.user;
        console.log('Usuário criado: ', user)
        navigation.navigate('Login');
      })
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  const navigation = useNavigation<propsStack>();

  const  handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
<>
    <ImageBackground style={styles.background} source={require('../../images/ft_subscribe.jpg')} />
    <View style={styles.container}>

      
      <View style={styles.input}>
        
        <Title text='Registre-se!' />
        
        <InputLogin
          onChange={setEmail}
          placeholder='Digite seu email'
          value={email}
          keyboard='email-address'
          />
        
        <InputSenha
          onChange={setPassword}
          placeholder='Digite sua Senha'
          value={password}
          keyboard='password'
        
        />
      </View>

      <View style={styles.buttons} >
        <Button action={handleSubscribe} value='Inscrever-se' />
        <Button action={handleLogin} value='Login' />
      </View>


    </View>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  buttons: {
    flexDirection: 'row',
    margin: 2,
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  input: {
    alignItems: 'center',
  },
});
