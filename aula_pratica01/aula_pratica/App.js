
import { SafeAreaProvider,} from 'react-native-safe-area-context'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { CustomModalScreen } from './src/components/CustomModal';

 
// Instanciamos o navegador por abas 
const Tab = createBottomTabNavigator(); 
 
export default function App() { 
  return ( 
    // SafeAreaProvider é o contexto obrigatório para que os SafeAreaViews funcionem corretamente 
    <SafeAreaProvider> 
      <NavigationContainer> 
        <Tab.Navigator  
          screenOptions={{  
            headerShown: false, // Removemos o cabeçalho padrão para um visual mais limpo 
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }, 
            tabBarActiveTintColor: '#000', 
          }} 
        > 
          {/*  
              Definição das três abas. Cada uma passa um animationType diferente  
              para o mesmo componente base, permitindo a comparação direta. 
          */} 
          <Tab.Screen name="SLIDE"> 
            {() => <CustomModalScreen animation="slide" themeColor="#2196F3" />} 
          </Tab.Screen> 
           
          <Tab.Screen name="FADE"> 
            {() => <CustomModalScreen animation="fade" themeColor="#4CAF50" />} 
          </Tab.Screen> 
           
          <Tab.Screen name="NONE"> 
            {() => <CustomModalScreen animation="none" themeColor="#FF9800" />} 
          </Tab.Screen> 
        </Tab.Navigator> 
      </NavigationContainer> 
    </SafeAreaProvider> 
  ); 
} 
 