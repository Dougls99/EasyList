import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    value: string;
    action: any;
}

export default function Button({value, action}:Props) {
  return (
  <TouchableOpacity style={styles.button} onPress={action} >
    <Text style={styles.buttonText} >{value}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 5,
        opacity: 1,
        marginTop: 5,
        elevation: 8,
    },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    });