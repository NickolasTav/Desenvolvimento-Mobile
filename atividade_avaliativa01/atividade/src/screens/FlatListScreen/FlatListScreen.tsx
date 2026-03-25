import { Text, View, FlatList } from 'react-native';
import { styles } from './FlatListScreen.styles';
import { DEFAULT_FLATLIST_TITLE, FlatListScreenProps } from './FlatListScreen.types';
import { mockItems } from '../../utils/mockData';

export default function FlatListScreen({ title }: FlatListScreenProps) {

  const renderHeaderComponent = () => (
    <>
      <Text style={styles.title}>{title ?? DEFAULT_FLATLIST_TITLE}</Text>
      <Text style={styles.subtitle}>Lista com dados ficticios:</Text>
    </>
  );


  return (
    <FlatList
      ListHeaderComponent={renderHeaderComponent}
      data={mockItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{item.nome}</Text>
          <Text style={styles.cardDescription}>{item.categoria}</Text>
          <Text style={styles.cardPrice}>R$ {item.preco.toFixed(2)}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
}
