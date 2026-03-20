import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomModal } from '../../components/CustomModal/CustomModal';
import { tabScreenOptions } from './ModalScreen.styles';
import { ModalScreenTabParamList } from './ModalScreen.types';

const Tab = createBottomTabNavigator<ModalScreenTabParamList>();

export default function ModalScreen() {
    return (
        <SafeAreaProvider>
            <Tab.Navigator screenOptions={tabScreenOptions}>
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
        </SafeAreaProvider>
    );
}
