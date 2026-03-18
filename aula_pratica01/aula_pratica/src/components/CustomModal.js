import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


/** 
 * Componente de Modal Aprimorado 
 * @param {string} animation - Define o tipo de transição (slide, fade, none) 
 * @param {string} themeColor - Cor temática para diferenciar visualmente as abas 
 */
export const CustomModalScreen = ({ animation, themeColor }) => {
  // O estado 'visible' é o booleano que controla a exibição do Modal 
  const [visible, setVisible] = useState(false);

  return (
    // SafeAreaView garante que o conteúdo não fique sob a barra de status ou a câmera 
    <SafeAreaView style={[styles.screenContainer, { backgroundColor: themeColor + '10' }]}>
      <Text style={[styles.headerText, { color: themeColor }]}>
        Modo: {animation.toUpperCase()}
      </Text>

      {/* Botão principal que altera o estado para true, ativando o Modal */}
      <TouchableOpacity
        style={[styles.mainButton, { backgroundColor: themeColor }]}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.buttonText}>TESTAR {animation.toUpperCase()}</Text>
      </TouchableOpacity>

      <Modal
        animationType={animation} // Define a física da transição solicitada 
        transparent={true}        // Permite visualizar o conteúdo da tela anterior sob o fundo 
        escurecido
        visible={visible}          // Propriedade booleana controlada pelo useState 
        onRequestClose={() => setVisible(false)} // Lida com o botão "voltar" físico do Android 
      >
        {/*  
            ESTRATÉGIA DO BACKDROP: 
            Este TouchableOpacity ocupa 100% da tela. Ao ser tocado, ele fecha o modal. 
            O activeOpacity={1} impede que o fundo semi-transparente "pisque" ao ser tocado. 
        */}
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          {/*  
              CARD DO MODAL: 
              Importante: Como este View está dentro de um TouchableOpacity, usamos 
              uma estrutura que impede que o toque dentro do card feche o modal. 
          */}


          <TouchableOpacity
            onPress={(e) => e.stopPropagation()}
            activeOpacity={false}
          >
            <View style={styles.modalCard}>
              {/* Detalhe estético: uma linha superior com a cor do tema da aba */}
              <View style={[styles.colorIndicator, { backgroundColor: themeColor }]} />

              <Text style={styles.modalTitle}>Animação {animation}</Text>

              <Text style={styles.modalBody}>
                {animation === 'slide' && "Perceba como eu subi suavemente do fundo da tela."}
                {animation === 'fade' && "Perceba como eu surgiu alterando a opacidade (transparência)."}
                {animation === 'none' && "Eu apareci instantaneamente, sem transição suave."}
              </Text>

              {/* Botão de fechamento manual dentro do card */}
              <TouchableOpacity
                style={[styles.closeButton]}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.closeButtonText}>FECHAR</Text>
              </TouchableOpacity >
            </View>
          </TouchableOpacity
          
          >
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },
  mainButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Cor preta com 70% de transparência para dar foco ao modal
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    overflow: 'hidden', // Necessário para o indicador de cor respeitar o raio da borda 
  },
  colorIndicator: {
    width: '120%',
    height: 10,
    position: 'absolute',
    top: 0,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
  },
  modalBody: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  closeButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
}); 