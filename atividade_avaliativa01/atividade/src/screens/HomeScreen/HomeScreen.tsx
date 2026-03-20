import { Text, View } from 'react-native';
import { styles } from './HomeScreen.styles';
import { DEFAULT_HOME_MESSAGE, HomeScreenProps } from './HomeScreen.types';

export default function HomeScreen({ message }: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message ?? DEFAULT_HOME_MESSAGE}</Text>
        </View>
    );
}
