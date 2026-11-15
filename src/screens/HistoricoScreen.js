import { SectionList, StyleSheet, Text, View } from 'react-native';
import MedicaoItem from '../components/MedicaoItem';

const periodos = [
  'Jejum',
  'Antes do almoço',
  'Depois do almoço',
  'Antes do jantar',
  'Depois do jantar',
  'Antes de dormir',
  'Madrugada',
];

export default function HistoricoScreen({ navigation, medicoes, onExcluirMedicao }) {
  const secoes = periodos
    .map((periodo) => ({
      title: periodo,
      data: medicoes.filter((medicao) => medicao.periodo === periodo),
    }))
    .filter((secao) => secao.data.length > 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de medições</Text>
      <SectionList
        sections={secoes}
        keyExtractor={(medicao) => medicao.id}
        renderItem={({ item }) => (
          <MedicaoItem
            medicao={item}
            onAbrir={() => navigation.navigate('Detalhes', { medicao: item })}
            onExcluir={() => onExcluirMedicao(item.id)}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma medição cadastrada ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#120B1A',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  empty: {
    color: '#CFC2D9',
    fontSize: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#B99BFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 8,
  },
});
