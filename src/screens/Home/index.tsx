import { View, StyleSheet } from 'react-native'
import Title from '../../components/Title'
import Card from '../../components/Card';

export function HomeScreen() {
  return (
    <View style={styles.container}>

      <Title text='EasyList' />

      <Card />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
});