import { SectionList, Text, View } from 'react-native';
import { styles } from './SectionListScreen.styles';
import { DEFAULT_SECTIONLIST_TITLE, SectionListScreenProps } from './SectionListScreen.types';
import { sectionsItems } from '../../utils/mockData';

export default function SectionListScreen({ title }: SectionListScreenProps) {
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ?? DEFAULT_SECTIONLIST_TITLE}</Text>
      <Text style={styles.subtitle}>Dados agrupados por categoria</Text>

      <SectionList
        sections={sectionsItems}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    </View>
  );
}
