import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens';

const MainStack = createNativeStackNavigator();

export const MainStackComponent = () => {
	return (
		<MainStack.Navigator initialRouteName="HomeScreen">
			<MainStack.Screen 
				name="Home" 
				component={HomeScreen}
				options={{ headerShown: false }} 
				/>
		</MainStack.Navigator>
	);
};
