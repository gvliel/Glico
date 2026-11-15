# Glico

## Descrição

O Glico é um aplicativo mobile desenvolvido com React Native e Expo para registrar e acompanhar medições de glicemia. O aplicativo permite cadastrar medições, consultar o histórico, visualizar detalhes dos registros e acompanhar a média aritmética das medições dos últimos 30 dias.

## Aluno

- **Nome:** Gabriel Silva de Lima
- **RGM:** 43557473

## Telas

- **Início:** apresenta o horário atual, a média das medições dos últimos 30 dias e acesso às demais funcionalidades.
- **Nova medição:** permite cadastrar o valor da glicemia, selecionar o período e adicionar uma observação opcional.
- **Histórico:** exibe as medições cadastradas, organizadas por período, permitindo visualizar detalhes e excluir registros.
- **Detalhes:** apresenta as informações completas de uma medição selecionada.

## Fonte de dados

O aplicativo utiliza dados locais armazenados em memória por meio do `useState`, sem integração com APIs externas ou banco de dados.

Os registros permanecem disponíveis enquanto o aplicativo está aberto. Ao encerrá-lo, os dados são perdidos.

## Onde estão os requisitos

- **Componentes:** `src/components/CampoTexto.js`, `src/components/MedicaoItem.js` e `src/components/SeletorPeriodo.js`.
- **Props com callback:** `CampoTexto.js`, `MedicaoItem.js` e `SeletorPeriodo.js`.
- **useState:** `App.js` (gerenciamento das medições) e `src/screens/NovaMedicaoScreen.js` (controle do formulário).
- **useEffect:** `src/screens/InicioScreen.js` (atualização periódica do horário).
- **Navegação com parâmetros:** `src/navigation/AppNavigator.js`, `src/screens/HistoricoScreen.js` e `src/screens/DetalhesScreen.js`.

## Vídeo de demonstração

O vídeo demonstrativo será disponibilizado em `demo/demo.mp4`.

## Como executar

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Expo Go instalado no dispositivo móvel.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/gvliel/Glico.git
```

Entre na pasta:

```bash
cd Glico
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npx expo start
```

Utilize o QR Code exibido no terminal para abrir o aplicativo pelo Expo Go.
