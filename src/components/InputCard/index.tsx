import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function InputCard() {
  return (
    <TextInput style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        borderColor: 'black',
        fontSize: 18,
        textAlign: 'center',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 20,
      },
    });