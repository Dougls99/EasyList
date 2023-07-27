import { View, Text , StyleSheet,} from 'react-native'
import React from 'react'

interface Props {
  value: any;
}

export default function Card({value}:Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.nameProduct} >{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "red",
        width: 300,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
    },
    nameProduct: {
        fontSize: 25,
        color: "white",
        textAlign: 'center',
        padding: 20,
    },
});