import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, SubscribeScreen, HomeScreen } from '../screens';
import { propsNavigationStack } from '.';

const MainStack = createNativeStackNavigator<propsNavigationStack>();

export const MainStackComponent = () => {
	return (
		<MainStack.Navigator initialRouteName="Login">
			<MainStack.Screen 
				name="Login" 
				component={LoginScreen}
				options={{ headerShown: false }} 
				/>
			<MainStack.Screen 
				name="Subscribe" 
				component={SubscribeScreen}
				options={{ headerShown: false }} 
				/>
			<MainStack.Screen 
				name="Home" 
				component={HomeScreen}
				options={{ headerShown: false }} 
				/>
		</MainStack.Navigator>
	);
};
