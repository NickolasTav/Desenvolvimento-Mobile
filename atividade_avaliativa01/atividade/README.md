# Atividade Avaliativa 01 — React Native

Aplicativo mobile desenvolvido com **Expo + React Native + TypeScript**, demonstrando navegação avançada com Drawer e Bottom Tabs, modais interativos com diferentes animações, e listas otimizadas para performance.

---

## 🚀 Como Rodar

```bash
npm install
npm run start
```

Escaneie o QR Code com o **Expo Go** ou pressione `w` para abrir na Web (recomendado para testes rápidos).

---

## 📁 Estrutura de Pastas e Padrões

O projeto segue uma arquitetura organizada por responsabilidade, utilizando o padrão de **3 arquivos por componente/tela**:

```
src/
├── components/          # Componentes reutilizáveis
│   └── CustomModal/
│       ├── CustomModal.tsx          # Lógica e Estrutura
│       ├── CustomModal.styles.ts    # Estilos Externos
│       └── CustomModal.types.ts     # Tipagem de Props
├── navigation/          # Toda a lógica de roteamento
│   ├── AppNavigator.tsx             # Drawer (Navigator Raiz)
│   ├── ModalTabsNavigation.tsx      # Abas do Modal (com Ícones)
│   ├── ScrollTabsNavigation.tsx     # Abas de Listas (com Ícones)
│   └── Navigation.types.ts          # Centralização de Tipos (ParamList)
├── screens/             # Telas principais do sistema
│   ├── HomeScreen/      # Home redesenhada com cards visuais
│   ├── ScrollViewScreen/
│   ├── FlatListScreen/
│   └── SectionListScreen/
└── utils/               # Dados e tipos auxiliares
    ├── mockData.ts      # Dados fictícios filtrados dinamicamente
    └── mockData.types.ts
```

---

## 🧭 Sistema de Navegação

### 1. Root Drawer (Menu Lateral)
Contém as seções principais: **Home**, **Modal** e **Scroll Tabs**. Cada rota possui ícones `Ionicons` para facilitar a navegação.

### 2. Bottom Tabs (Abas Inferiores)
- **Modal Navigation**: Escolha entre SLIDE, FADE e NONE para testar animações de modal.
- **Scroll Tabs**: Alterne entre diferentes motores de renderização de listas (`ScrollView`, `FlatList` e `SectionList`).

### 🛠️ Tipagem Estrita
Toda a navegação é **fortemente tipada** em `Navigation.types.ts`, garantindo que não existam erros de rotas inexistentes ou parâmetros inválidos.

---

## 🪟 Modais Dinâmicos

O componente `CustomModal` foi refatorado para ser totalmente desacoplado da navegação.
- **Animações**: Suporta nativamente os modos do React Native.
- **Visual**: Overlay com blur/escurecimento, cores de tema dinâmicas e fechamento por toque externo.

---

## 📜 Entendendo as Listas no React Native

No React Native, temos diferentes formas de exibir listas de itens na tela. Neste projeto, demonstramos três abordagens principais. Aqui está uma explicação bem simples de como cada uma funciona e quando usar:

### 1. ScrollView 📜
**O que é:** É o componente mais básico para permitir rolagem de tela.
**Como funciona:** Ele carrega **todos** os itens de uma vez só na memória, mesmo que eles não estejam aparecendo na tela ainda. Para colocar vários itens dentro dele, geralmente usamos um `.map()` na nossa lista de dados.
**Quando usar:** Quando você tem **poucos elementos** na tela ou um conteúdo mais estático (como um texto longo de "Termos de Uso", formulários de cadastro ou uma tela de perfil). Se usar com muitos itens (ex: 1000 itens), seu app vai travar!
**No projeto:** Veja a demonstração em `ScrollViewScreen.tsx`.

### 2. FlatList 🚀
**O que é:** É a lista "inteligente" e muito otimizada do React Native.
**Como funciona:** Diferente do ScrollView, ela **só carrega o que está visível na tela**. Conforme você rola para baixo, ela "esquece" os itens que ficaram para trás e renderiza os novos itens que estão aparecendo. Isso economiza muita memória e processamento.
**Quando usar:** Sempre que for exibir uma **lista longa ou infinita** (como um feed de rede social, lista de produtos, histórico de pedidos).
**Principais Props:**
- `data`: a lista de informações em si.
- `renderItem`: o visual de apenas 1 item (a lista cuida de repetir para você).
- `keyExtractor`: um identificador único para cada item (geralmente o ID).
**No projeto:** Veja a demonstração em `FlatListScreen.tsx`.

### 3. SectionList 🗂️
**O que é:** É uma "irmã" da FlatList, mas feita especialmente para **listas agrupadas com cabeçalhos/títulos**.
**Como funciona:** Tem a mesma performance inteligente da FlatList, porém o array de dados precisa estar estruturado de uma forma específica, separando em títulos e seus respectivos dados.
**Quando usar:** Quando precisar separar itens por grupos (ex: lista de contatos agrupada pelas letras A, B, C; menu de restaurante separado por "Bebidas" e "Pratos Principais"; produtos separados por categorias).
**Principais Props:**
- `sections`: os dados agrupados (ex: titulo e itens dentro).
- `renderSectionHeader`: o visual do título do agrupamento.
**No projeto:** Veja a demonstração em `SectionListScreen.tsx`.

---

## 🛡️ SafeArea e Layout
- O app utiliza **`SafeAreaProvider`** no arquivo raiz (`App.tsx`), garantindo que o conteúdo respeite notches e barras de sistema.
- As barras de abas possuem **altura e paddings customizados** para uma experiência visual premium também na Web.

---

## 🛠️ Tecnologias Principais
- **React Native 0.81** (Renderização nativa)
- **React 19.1** (Hooks e Lógica)
- **TypeScript** (Segurança de código)
- **React Navigation 7.x** (Navegação Drawer/Tabs)
- **Ionicons** (Sistema de ícones)
