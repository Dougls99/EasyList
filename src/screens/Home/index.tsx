import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ImageBackground, StatusBar } from 'react-native';

export const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '123' && password === '123') {
      Alert.alert('Login bem-sucedido');
    } else {
      Alert.alert('Credenciais inválidas');
    }
  };

  return (
    <>
    <StatusBar hidden />
    <ImageBackground style={styles.background} source={require('../../images/background.jpg')} />
    <View style={styles.container}>
      <Text style={styles.title}>Easy List</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address" />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'green',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});