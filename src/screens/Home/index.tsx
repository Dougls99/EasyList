import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Title from '../../components/Title'
import CartButton from '../../components/CartButton';
import AdditionButton from '../../components/AdditionButton';
import InputCard from '../../components/InputCard';
import { useState } from 'react';
import { propsStack } from '../../routes';

export function HomeScreen() {

  const [inputValue, setInputValue] = useState('');

  const handleSaveValue = () => {
    console.log(inputValue);
  }

  const navigation = useNavigation<propsStack>();

  const  handleCart = () => {
    navigation.navigate('Subscribe');
  }

  return (
    <View style={styles.container}>

      <Title text='Monte Sua Lista' />

      <View style={styles.input}>
        <Text>Digite o Produto que deseja acrescentar</Text>
        <InputCard />
      </View>

        <View style={styles.btn}>
          <AdditionButton press={handleSaveValue} />
          <CartButton />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
    backgroundColor: "white",
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    width: 200,
    height: 200,
  },
  input: {
    paddingTop: 90,
    alignItems: 'center',
  }
});