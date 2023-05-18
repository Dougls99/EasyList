import { NavigationContainer } from '@react-navigation/native';

import { MainStackComponent } from './routes/routes';

export default function App() {
	return (
		<NavigationContainer>
			<MainStackComponent />
		</NavigationContainer>
	);
}
