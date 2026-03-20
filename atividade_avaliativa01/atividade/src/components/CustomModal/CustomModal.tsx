import React, { useState } from 'react';
import {
    Text,
    View,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './CustomModal.styles';
import { CustomModalProps } from './CustomModal.types';

export const CustomModal = ({ animation, themeColor }: CustomModalProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <SafeAreaView style={[styles.screenContainer, { backgroundColor: themeColor + '10' }]}>
            <Text style={[styles.headerText, { color: themeColor }]}>
                Modo: {animation.toUpperCase()}
            </Text>

            <TouchableOpacity
                style={[styles.mainButton, { backgroundColor: themeColor }]}
                onPress={() => setVisible(true)}
            >
                <Text style={styles.buttonText}>TESTAR {animation.toUpperCase()}</Text>
            </TouchableOpacity>

            <Modal
                animationType={animation} // Aqui o React Native define a física da transição
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
                onDismiss={() => setVisible(false)}
            >
                {/* Backdrop: Fechar ao tocar fora */}
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setVisible(false)}

                >
                    <TouchableWithoutFeedback onPress={(e) => {
                        e.stopPropagation()
                    }}>



                        {/* Card do Modal */}
                        <View style={styles.modalCard}>
                            <View style={[styles.colorIndicator, { backgroundColor: themeColor }]} />

                            <Text style={styles.modalTitle}>Animação {animation}</Text>

                            <Text style={styles.modalBody}>
                                {animation === 'slide' && "Perceba como eu subi suavemente do fundo da tela."}
                                {animation === 'fade' && "Perceba como eu surgi alterando a opacidade (transparência)."}
                                {animation === 'none' && "Eu apareci instantaneamente, sem transição suave."}
                            </Text>

                            <TouchableOpacity
                                style={[styles.closeButton]}
                                onPress={() => setVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>FECHAR</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>

            </Modal>
        </SafeAreaView>
    );
};