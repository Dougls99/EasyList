import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface Props {
    value: string;
    action: any;
}

export default function TextButton({value, action}:Props) {
  return (
    <TouchableOpacity onPress={action}>
      <Text>{value}</Text>
    </TouchableOpacity>
  )
}