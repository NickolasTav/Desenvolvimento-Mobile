import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { CustomModal } from '../components/CustomModal/CustomModal';
import { ModalTabsParamList } from './Navigation.types';

const Tab = createBottomTabNavigator<ModalTabsParamList>();

export default function ModalTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#000',
        tabBarStyle: {
          paddingBottom: 10,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'SLIDE') {
            return <Ionicons name="layers-outline" size={size} color={color} />;
          }
          if (route.name === 'FADE') {
            return <Ionicons name="aperture-outline" size={size} color={color} />;
          }
          return <Ionicons name="square-outline" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="SLIDE">
        {() => <CustomModal animation="slide" themeColor="#2196F3" />}
      </Tab.Screen>
      <Tab.Screen name="FADE">
        {() => <CustomModal animation="fade" themeColor="#4CAF50" />}
      </Tab.Screen>
      <Tab.Screen name="NONE">
        {() => <CustomModal animation="none" themeColor="#FF9800" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
