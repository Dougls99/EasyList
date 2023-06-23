import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Alert, StyleSheet, ImageBackground, } from 'react-native';

import { propsStack } from '../../routes';
import { auth } from '../../dataBase/firebase';

import Input from '../../components/Input';
import Title  from '../../components/Title'
import Button from '../../components/Button';
import TextButton from '../../components/TextButton';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

  const handleLogin = () => {
    if (validateEmail(email) && password.length >= 6 ) {
      auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário autenticado:', user);
        navigation.navigate('Home');
      })
     } else {
         Alert.alert('Credenciais inválidas');
     }
  };

  const handleForgotPassword = () => {
    if (validateEmail(email)){
      auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert("Redefinir Senha", "Enviamos um e-mail para você!"))
    } else {
      Alert.alert('Campo de Email incorreto');
    }
  }

  const navigation = useNavigation<propsStack>();

  const  handleSubscribe = () => {
    navigation.navigate('Subscribe');
  }

  return (
    <>
    <ImageBackground style={styles.background} source={require('../../images/background.jpg')} />
    <View style={styles.container}>
      
    <View style={styles.input}>
        <Title text='EasyList' />

        <Input
          onChange={setEmail}
          placeholder="Email"
          value={email}
          keyboard='email-address'
        />

         <Input 
          onChange={setPassword}
          placeholder="Senha"
          value={password}
          keyboard='password'
        /> 
    </View>

    <View style={styles.buttons}>
      <Button action={handleLogin} value='Login' />
      <Button action={handleSubscribe} value='Registre-se' />
    </View>
    
    <View style={styles.textButton}>
      <TextButton action={handleForgotPassword} value='Esqueci minha senha' />
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
  textButton: {
    backgroundColor: ' #e04d4d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
});