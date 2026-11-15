import { Pressable, StyleSheet, Text, View } from 'react-native';

const periodos = [
  'Jejum',
  'Antes do almoço',
  'Depois do almoço',
  'Antes do jantar',
  'Depois do jantar',
  'Antes de dormir',
  'Madrugada',
];

export default function SeletorPeriodo({ periodoSelecionado, onSelecionar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Período</Text>
      <View style={styles.options}>
        {periodos.map((periodo) => (
          <Pressable
            key={periodo}
            style={[
              styles.option,
              periodoSelecionado === periodo && styles.optionSelected,
            ]}
            onPress={() => onSelecionar(periodo)}
          >
            <Text style={styles.optionText}>{periodo}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: '#E7DDF0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    backgroundColor: '#261B31',
    borderColor: '#65447D',
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 8,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  optionSelected: {
    backgroundColor: '#8B5CF6',
    borderColor: '#A78BFA',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
