import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    press: any;
}

export default function AdditionButton({press}:Props) {
  return (
    <TouchableOpacity onPress={press} >
        <Image
          source={require('../../images/adicao.png')}
         style={styles.addition}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    addition: {
      paddingTop: 50,
      height: 50,
      width: 50,
    },
  });