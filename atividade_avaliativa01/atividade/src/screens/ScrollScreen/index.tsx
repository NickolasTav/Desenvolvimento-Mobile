import { Text, View } from 'react-native';
import { styles } from './ScrollScreen.styles';
import { DEFAULT_SCROLL_TITLE, ScrollScreenProps } from './ScrollScreen.types';

export default function ScrollScreen({ title }: ScrollScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ?? DEFAULT_SCROLL_TITLE}</Text>
      <Text style={styles.subtitle}>Tela base pronta para implementar rolagem.</Text>
    </View>
  );
}
