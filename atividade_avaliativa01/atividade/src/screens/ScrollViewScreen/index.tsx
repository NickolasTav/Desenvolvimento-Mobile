import { Text, View } from 'react-native';
import { styles } from './ScrollViewScreen.styles';
import { DEFAULT_SCROLLVIEW_TITLE, ScrollViewScreenProps } from './ScrollViewScreen.types';

export default function ScrollViewScreen({ title }: ScrollViewScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ?? DEFAULT_SCROLLVIEW_TITLE}</Text>
      <Text style={styles.subtitle}>Tela base pronta para implementar ScrollView.</Text>
    </View>
  );
}
