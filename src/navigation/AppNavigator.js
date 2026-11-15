import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from '../screens/InicioScreen';
import NovaMedicaoScreen from '../screens/NovaMedicaoScreen';
import HistoricoScreen from '../screens/HistoricoScreen';
import DetalhesScreen from '../screens/DetalhesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator({
  medicoes,
  onAdicionarMedicao,
  onExcluirMedicao,
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: '#261238' },
          headerTintColor: '#FFFFFF',
          contentStyle: { backgroundColor: '#120B1A' },
        }}
      >
        <Stack.Screen
          name="Inicio"
          options={{ title: 'Glico' }}
        >
          {(props) => <InicioScreen {...props} medicoes={medicoes} />}
        </Stack.Screen>
        <Stack.Screen
          name="NovaMedicao"
          options={{ title: 'Nova medição' }}
        >
          {(props) => (
            <NovaMedicaoScreen
              {...props}
              onAdicionarMedicao={onAdicionarMedicao}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Historico"
          options={{ title: 'Histórico' }}
        >
          {(props) => (
            <HistoricoScreen
              {...props}
              medicoes={medicoes}
              onExcluirMedicao={onExcluirMedicao}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Detalhes"
          options={{ title: 'Detalhes da medição' }}
        >
          {(props) => <DetalhesScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
