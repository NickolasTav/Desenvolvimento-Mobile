import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import { CustomModalScreen } from './CustomModal';

export default function ModalScreen() {
    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                    tabBarActiveTintColor: '#000',
                }}
            >

                <Tab.Screen name="SLIDE">
                    {() => <CustomModalScreen animation="slide" themeColor="#2196F3" />}
                </Tab.Screen>
                <Tab.Screen name="FADE">
                    {() => <CustomModalScreen animation="fade" themeColor="#4CAF50" />}
                </Tab.Screen>
                <Tab.Screen name="NONE">
                    {() => <CustomModalScreen animation="none" themeColor="#FF9800" />}
                </Tab.Screen>
            </Tab.Navigator>
        </SafeAreaProvider>
    );
}
