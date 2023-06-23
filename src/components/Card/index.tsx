import { View, Text, TextInput , StyleSheet } from 'react-native'
import React from 'react'


export default function Card() {
  return (
    <View style={styles.card}>
      
        <TextInput style={styles.nameProduct} placeholder='Nome do Produto' />

        <View style={styles.count} >
            <Text>0</Text>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "red",
        width: 350,
        height: 80,
        borderRadius: 30,
    },
    nameProduct: {
        fontSize: 25,
        color: "white",
        textAlign: 'left',
        padding: 20,
    },
    count: {
        width: 25,
        height: 25,
        backgroundColor: "gray",
        alignItems: 'center',
    },
});