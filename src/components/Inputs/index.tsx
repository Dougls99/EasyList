import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    value: any;
    placeholder: string;
    onChange: any;
    keyboard?: any;
    secure?: boolean;
}

export function InputLogin({value, placeholder, onChange, keyboard, secure}:Props) {
  return (
    <View>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboard}
            secureTextEntry={secure} 
        />
    </View>
  )
}

export function InputSenha({value, placeholder, onChange, keyboard}:Props) {
  return (
    <View>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboard}
            secureTextEntry
        />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        borderColor: 'black',
        fontSize: 18,
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 20,
      },
    });