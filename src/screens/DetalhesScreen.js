import { StyleSheet, Text, View } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { medicao } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da medição</Text>
      <Text style={styles.label}>Glicemia</Text>
      <Text style={styles.value}>{medicao.valor} mg/dL</Text>
      <Text style={styles.label}>Período</Text>
      <Text style={styles.text}>{medicao.periodo}</Text>
      <Text style={styles.label}>Data e hora</Text>
      <Text style={styles.text}>{medicao.data} às {medicao.hora}</Text>
      <Text style={styles.label}>Observação</Text>
      <Text style={styles.text}>{medicao.observacao || 'Nenhuma observação.'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#120B1A',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    color: '#B99BFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 14,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    color: '#E7DDF0',
    fontSize: 17,
  },
});
