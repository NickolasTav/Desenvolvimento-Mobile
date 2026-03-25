import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ScrollViewScreen from '../screens/ScrollViewScreen/ScrollViewScreen';
import FlatListScreen from '../screens/FlatListScreen/FlatListScreen';
import SectionListScreen from '../screens/SectionListScreen/SectionListScreen';

type ScrollTabsParamList = {
	ScrollView: undefined;
	FlatList: undefined;
	SectionList: undefined;
};

const Tab = createBottomTabNavigator<ScrollTabsParamList>();

export default function ScrollTabsNavigation() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					if (route.name === 'ScrollView') {
						return <Ionicons name="albums-outline" size={size} color={color} />;
					}

					if (route.name === 'FlatList') {
						return <Ionicons name="list-outline" size={size} color={color} />;
					}

					return <Ionicons name="grid-outline" size={size} color={color} />;
				},
				headerShown: false,
			})}
		>
			<Tab.Screen
				name="ScrollView"
				options={{ title: 'ScrollView' }}
			>
				{() => <ScrollViewScreen title="ScrollView" />}
			</Tab.Screen>

			<Tab.Screen
				name="FlatList"
				options={{ title: 'FlatList' }}
			>
				{() => <FlatListScreen title="FlatList" />}
			</Tab.Screen>

			<Tab.Screen
				name="SectionList"
				options={{ title: 'SectionList' }}
			>
				{() => <SectionListScreen title="SectionList" />}
			</Tab.Screen>
		</Tab.Navigator>
	);
}
