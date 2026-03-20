import { Text, View } from 'react-native';
import { styles } from './FlatListScreen.styles';
import { DEFAULT_FLATLIST_TITLE, FlatListScreenProps } from './FlatListScreen.types';

export default function FlatListScreen({ title }: FlatListScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ?? DEFAULT_FLATLIST_TITLE}</Text>
      <Text style={styles.subtitle}>Tela base pronta para implementar FlatList.</Text>
    </View>
  );
}
