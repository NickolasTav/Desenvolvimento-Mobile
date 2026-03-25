import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './HomeScreen.styles';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Atividade Mobile</Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={[styles.card, { borderLeftColor: '#00b5fd' }]}>
                    <Ionicons name="layers-outline" size={24} color="#00b5fd" />
                    <View style={styles.cardTextContent}>
                        <Text style={styles.cardTitle}>Modais Dinâmicos</Text>
                        <Text style={styles.cardDescription}>Teste 3 tipos de animações: Slide, Fade e None em tempo real.</Text>
                    </View>
                </View>

                <View style={[styles.card, { borderLeftColor: '#4CAF50' }]}>
                    <Ionicons name="list-outline" size={24} color="#4CAF50" />
                    <View style={styles.cardTextContent}>
                        <Text style={styles.cardTitle}>Listas Otimizadas</Text>
                        <Text style={styles.cardDescription}>Explore 100 itens renderizados com FlatList e ScrollView.</Text>
                    </View>
                </View>

                <View style={[styles.card, { borderLeftColor: '#FF9800' }]}>
                    <Ionicons name="grid-outline" size={24} color="#FF9800" />
                    <View style={styles.cardTextContent}>
                        <Text style={styles.cardTitle}>Agrupamento</Text>
                        <Text style={styles.cardDescription}>Veja dados organizados por categorias usando SectionList.</Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Utilize o menu lateral e as abas inferiores para navegar.</Text>
            </View>
        </ScrollView>
    );
}
