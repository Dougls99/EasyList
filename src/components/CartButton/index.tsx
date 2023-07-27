import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CartButton() {
  return (
    <TouchableOpacity >
        <Image
          source={require('../../images/cart.png')}
         style={styles.cart}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cart: {
      paddingTop: 50,
      height: 50,
      width: 50,
    },
  });