# ⏱️ Fokus

Aplicativo de gerenciamento de tempo e tarefas desenvolvido com **React Native** e **Expo**, criado como projeto de prática para estudos de desenvolvimento mobile.

O aplicativo utiliza uma abordagem baseada em ciclos de foco e descanso, oferecendo três momentos diferentes:

- 🎯 **Foco** — período destinado à concentração e realização das atividades.
- ☕ **Pausa Curta** — intervalo rápido para descanso.
- 🌴 **Pausa Longa** — intervalo maior para recuperar a energia antes de iniciar um novo ciclo.

Além do gerenciamento de tempo, o aplicativo possui um sistema de **gerenciamento de tarefas**, permitindo criar, editar, concluir e excluir tarefas.

## 📱 Sobre o projeto

O **Fokus** foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento mobile utilizando React Native e Expo.

Durante o desenvolvimento foram explorados conceitos como:

- Componentização no React Native;
- Gerenciamento de estados;
- Context API;
- Hooks do React;
- Manipulação de temporizadores;
- Estilização de componentes;
- Uso de imagens e recursos locais;
- Desenvolvimento multiplataforma;
- Estruturação de projetos com Expo;
- Navegação e organização de telas com Expo Router;
- Criação e gerenciamento de tarefas;

## 🚀 Tecnologias utilizadas

- **React Native**
- **Expo**
- **React**
- **Expo Router**
- **Local Storage**

## ⏳ Modos de tempo

O aplicativo possui três modos principais:

### 🎯 Foco

Momento destinado à concentração e execução das tarefas.

### ☕ Pausa Curta

Intervalo rápido entre os períodos de foco, permitindo uma breve recuperação.

### 🌴 Pausa Longa

Intervalo maior utilizado após determinados ciclos de foco, proporcionando um descanso mais prolongado.

## ✅ Gerenciamento de tarefas

O Fokus também conta com uma área dedicada ao gerenciamento de tarefas.

Atualmente, é possível:

- ➕ **Adicionar tarefas**;
- ✏️ **Editar tarefas existentes**;
- 🗑️ **Excluir tarefas**;
- ☑️ **Marcar tarefas como concluídas**;
- 💾 **Manter as tarefas salvas utilizando Local Storage**;
- 📭 **Exibir uma mensagem quando não existem tarefas cadastradas**.

As tarefas são organizadas em uma lista utilizando o componente **FlatList** do React Native.

## 🧭 Navegação

A aplicação utiliza o **Expo Router** para organizar a navegação entre as telas.

Entre as telas e funcionalidades estão:

- Tela principal do aplicativo;
- Tela de tarefas;
- Tela para adicionar uma nova tarefa;
- Tela para editar uma tarefa existente.

A edição de uma tarefa utiliza o identificador (`id`) da tarefa através dos parâmetros da rota.

## 🎨 Interface

A interface foi desenvolvida pensando em uma experiência simples e objetiva, permitindo que o usuário acompanhe facilmente o modo atual, o tempo restante e suas tarefas.

A aplicação utiliza componentes reutilizáveis para facilitar a organização e manutenção do código.

## 💾 Persistência de dados

As tarefas são armazenadas localmente utilizando **Local Storage**, permitindo que os dados permaneçam disponíveis mesmo após o fechamento ou reinicialização da aplicação.

O gerenciamento das tarefas é centralizado através do **Context API**, facilitando o compartilhamento dos dados e das funções entre diferentes telas e componentes.

## 📚 Objetivo

Este projeto foi desenvolvido **exclusivamente para fins de prática e aprendizado**, com o objetivo de aprimorar conhecimentos em:

- React Native;
- Expo;
- Desenvolvimento de aplicações mobile;
- Componentização;
- Context API;
- Gerenciamento de estados;
- Hooks;
- Expo Router;
- Persistência de dados;
- Manipulação de tempo;
- Organização de projetos React Native.

## 💻 Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/gabriel-pereira0/Fokus
```

Entre na pasta:

```bash
cd Fokus
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npx expo start
```

Para executar no navegador:

```bash
npx expo start --web
```

Também é possível executar o projeto utilizando um dispositivo físico ou emulador compatível com Expo.
