import React, { useState } from 'react';
import {
    StyleSheet,
} from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

import { CustomModalScreen } from './CustomModal';

export default function ModalScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.</Text>
        </View>
    );
}
