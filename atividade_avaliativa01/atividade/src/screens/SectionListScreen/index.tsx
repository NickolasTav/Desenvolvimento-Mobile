import { Text, View } from 'react-native';
import { styles } from './SectionListScreen.styles';
import { DEFAULT_SECTIONLIST_TITLE, SectionListScreenProps } from './SectionListScreen.types';

export default function SectionListScreen({ title }: SectionListScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ?? DEFAULT_SECTIONLIST_TITLE}</Text>
      <Text style={styles.subtitle}>Tela base pronta para implementar SectionList.</Text>
    </View>
  );
}
