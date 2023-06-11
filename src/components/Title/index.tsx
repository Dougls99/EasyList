import { StyleSheet, Text } from 'react-native';

interface Props {
    text: string;
}

export default function Title ({text}:Props) {
  return <Text style={styles.title} >{text}</Text> 
}

const styles = StyleSheet.create({
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 16,
  color: 'green',
}
});