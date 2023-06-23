import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    value: any;
    placeholder: string;
    onChange: any;
    keyboard?: any; 
}

export default function Input({value, placeholder, onChange, keyboard}:Props) {
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
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
      },
    });