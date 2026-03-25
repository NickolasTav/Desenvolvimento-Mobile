import { ScrollView, Text, View } from 'react-native';
import { styles } from './ScrollViewScreen.styles';
import { DEFAULT_SCROLLVIEW_TITLE, ScrollViewScreenProps } from './ScrollViewScreen.types';
import { mockItems } from '../../utils/mockData';


export default function ScrollViewScreen({ title }: ScrollViewScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title ?? DEFAULT_SCROLLVIEW_TITLE}</Text>
      <Text style={styles.subtitle}>Lista com dados ficticios:</Text>

      {mockItems.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.nome}</Text>
          <Text style={styles.cardDescription}>{item.categoria}</Text>
          <Text style={styles.cardPrice}>R$ {item.preco.toFixed(2)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
