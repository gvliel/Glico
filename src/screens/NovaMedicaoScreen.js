import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import CampoTexto from '../components/CampoTexto';
import SeletorPeriodo from '../components/SeletorPeriodo';

export default function NovaMedicaoScreen({ navigation, onAdicionarMedicao }) {
  const [valor, setValor] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [observacao, setObservacao] = useState('');
  const [erro, setErro] = useState('');

  function salvarMedicao() {
    const valorNumerico = Number(valor.replace(',', '.'));

    if (!valor.trim() || Number.isNaN(valorNumerico) || valorNumerico <= 0) {
      setErro('Informe uma glicemia válida em mg/dL.');
      return;
    }

    if (!periodo) {
      setErro('Selecione o período da medição.');
      return;
    }

    onAdicionarMedicao({
      valor: valorNumerico,
      periodo,
      observacao: observacao.trim(),
    });
    setValor('');
    setPeriodo('');
    setObservacao('');
    setErro('');
    navigation.navigate('Historico');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastrar medição</Text>
      <CampoTexto
        label="Glicemia (mg/dL)"
        value={valor}
        onChangeText={setValor}
        placeholder="Ex.: 100"
        keyboardType="numeric"
      />
      <SeletorPeriodo
        periodoSelecionado={periodo}
        onSelecionar={setPeriodo}
      />
      <CampoTexto
        label="Observação (opcional)"
        value={observacao}
        onChangeText={setObservacao}
        placeholder="Ex.: Após atividade física"
        multiline
      />
      <Text style={styles.info}>A data e a hora serão registradas ao salvar.</Text>
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      <Pressable style={styles.button} onPress={salvarMedicao}>
        <Text style={styles.buttonText}>Salvar medição</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#120B1A',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  info: {
    color: '#CFC2D9',
    fontSize: 14,
    marginBottom: 20,
  },
  error: {
    color: '#FDA4AF',
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    padding: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
