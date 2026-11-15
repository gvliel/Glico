import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function criarDataDaMedicao(data) {
  const [dia, mes, ano] = data.split('/');
  return new Date(Number(ano), Number(mes) - 1, Number(dia));
}

export default function InicioScreen({ navigation, medicoes }) {
  const [horario, setHorario] = useState(() =>
    new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHorario(
        new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 60000);

    return () => clearInterval(intervalo);
  }, []);

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const limite = new Date(hoje);
  limite.setDate(hoje.getDate() - 29);

  const medicoesRecentes = medicoes.filter((medicao) => {
    const dataMedicao = criarDataDaMedicao(medicao.data);
    const valorValido = Number.isFinite(Number(medicao.valor));

    return (
      valorValido &&
      !Number.isNaN(dataMedicao.getTime()) &&
      dataMedicao >= limite &&
      dataMedicao <= hoje
    );
  });

  const media = medicoesRecentes.length
    ? Math.round(
        medicoesRecentes.reduce(
          (total, medicao) => total + Number(medicao.valor),
          0
        ) / medicoesRecentes.length
      )
    : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Glico</Text>
      <Text style={styles.subtitle}>Registre e consulte suas medições.</Text>
      <Text style={styles.clock}>Horário atual: {horario}</Text>
      <View style={styles.averageCard}>
        <Text style={styles.averageLabel}>Média dos últimos 30 dias</Text>
        <Text style={styles.averageValue}>
          {media === null
            ? 'Sem medições nos últimos 30 dias'
            : `${media} mg/dL`}
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('NovaMedicao')}
      >
        <Text style={styles.buttonText}>Nova medição</Text>
      </Pressable>
      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Historico')}
      >
        <Text style={styles.buttonText}>Ver histórico</Text>
      </Pressable>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#CFC2D9',
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  clock: {
    color: '#A895B7',
    fontSize: 13,
    marginBottom: 24,
  },
  averageCard: {
    alignItems: 'center',
    backgroundColor: '#261B31',
    borderColor: '#65447D',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 24,
    padding: 16,
    width: '100%',
  },
  averageLabel: {
    color: '#CFC2D9',
    fontSize: 14,
    marginBottom: 6,
  },
  averageValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
  secondaryButton: {
    backgroundColor: '#4B2A68',
    borderRadius: 8,
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
