import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function MedicaoItem({ medicao, onAbrir, onExcluir }) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onAbrir}>
        <Text style={styles.value}>{medicao.valor} mg/dL</Text>
        <Text style={styles.period}>{medicao.periodo}</Text>
        <Text style={styles.date}>{medicao.data} às {medicao.hora}</Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={onExcluir}>
        <Text style={styles.deleteText}>Excluir</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#261B31',
    borderColor: '#4B2A68',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 12,
    padding: 16,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  period: {
    color: '#B99BFF',
    fontSize: 16,
    marginTop: 4,
  },
  date: {
    color: '#CFC2D9',
    marginTop: 6,
  },
  deleteButton: {
    alignSelf: 'flex-start',
    marginTop: 14,
  },
  deleteText: {
    color: '#FDA4AF',
    fontWeight: 'bold',
  },
});
