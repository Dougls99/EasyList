import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { MainStackComponent } from './routes/routes';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar hidden />
			<MainStackComponent />
		</NavigationContainer>
	);
}
