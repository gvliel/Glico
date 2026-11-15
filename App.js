import { useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [medicoes, setMedicoes] = useState([]);

  function adicionarMedicao({ valor, periodo, observacao }) {
    const agora = new Date();
    const novaMedicao = {
      id: agora.getTime().toString(),
      valor,
      periodo,
      observacao,
      data: agora.toLocaleDateString('pt-BR'),
      hora: agora.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMedicoes((medicoesAtuais) => [...medicoesAtuais, novaMedicao]);
  }

  function excluirMedicao(id) {
    setMedicoes((medicoesAtuais) =>
      medicoesAtuais.filter((medicao) => medicao.id !== id)
    );
  }

  return (
    <AppNavigator
      medicoes={medicoes}
      onAdicionarMedicao={adicionarMedicao}
      onExcluirMedicao={excluirMedicao}
    />
  );
}
