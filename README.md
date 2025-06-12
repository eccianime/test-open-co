# Projeto Test Open Co

Este é um aplicativo de teste criado para um processo de contratação com a Open Co

## Sumário

- [i. Instruções para Executar o Projeto](#i-instruções-para-executar-o-projeto)
- [ii. Decisões Arquitetônicas](#ii-decisões-arquitetônicas)
- [iii. Bibliotecas Utilizadas e Justificativas](#iii-bibliotecas-utilizadas-e-justificativas)
- [iv. Dificuldades Encontradas e Como Foram Resolvidas](#iv-dificuldades-encontradas-e-como-foram-resolvidas)

---

### i. Instruções para Executar o Projeto

Para configurar e executar este projeto localmente, siga estas etapas:

1.  **Clonar o repositório:**

    ```bash
    git clone https://github.com/eccianime/test-open-co
    cd test-open-co
    ```

2.  **Instalar Dependências:**
    Use npm ou yarn para instalar as dependências do projeto.

    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Iniciar o Servidor de Desenvolvimento:**
    Você pode iniciar o servidor de desenvolvimento Expo, que fornecerá opções para executar em várias plataformas.

    ```bash
    npm start
    # ou
    yarn start
    ```

    Este comando abrirá o Expo Dev Tools no seu navegador, a partir do qual você pode escolher executar o aplicativo em:

    - **Android:** `npm run android` ou `yarn android`
    - **iOS:** `npm run ios` ou `yarn ios`
    - **Web:** `npm run web` ou `yarn web`

---

### ii. Decisões Arquitetônicas

O projeto adota uma arquitetura moderna baseada em componentes para construir um aplicativo móvel robusto e escalável. As principais decisões arquitetônicas incluem:

- **Expo Router para Roteamento:** Utiliza o Expo Router para uma abordagem de roteamento baseada em sistema de arquivos, simplificando a navegação. Isso fornece uma maneira clara e intuitiva de gerenciar telas e fluxos do aplicativo.
- **NativeWind (Tailwind CSS) para Estilização:** Implementa o NativeWind para trazer a abordagem utility-first do Tailwind CSS para o React Native. Isso simplifica a estilização, promove a consistência e acelera significativamente o desenvolvimento da interface do usuário, aplicando estilos diretamente via nomes de classe de componentes. Fontes personalizadas (Poppins) e cores são integradas via `tailwind.config.js`.
- **Redux Toolkit para Gerenciamento de Estado:** Utiliza o Redux Toolkit para um gerenciamento de estado eficiente e previsível. Isso ajuda a centralizar o estado do aplicativo, tornando mais fácil gerenciar fluxos de dados complexos e garantindo uma única fonte de verdade para os dados do aplicativo. A estrutura do projeto inclui um diretório `src/redux` para arquivos relacionados ao Redux.
- **TypeScript para Segurança de Tipo:** Todo o código é escrito em TypeScript, fornecendo tipagem estática para capturar erros no início do ciclo de desenvolvimento, melhorar a legibilidade do código e aprimorar a experiência do desenvolvedor por meio de melhor autocompletar e recursos de refatoração.
- **Estrutura de Projeto Modular:** O diretório `src` é organizado em módulos lógicos como `app`, `components`, `constants`, `hook`, `redux`, `types` e `assets`, promovendo organização, reutilização e manutenibilidade do código.

---

### iii. Bibliotecas Utilizadas e Justificativas

Aqui está uma lista das principais bibliotecas usadas neste projeto e suas justificativas:

- **`expo` (~53.0.11):** O framework principal para construir aplicativos React universais. Ele fornece um conjunto abrangente de ferramentas e serviços para desenvolver, construir e implantar aplicativos React Native.
- **`expo-router` (~5.1.0):** Um roteador baseado em sistema de arquivos para Expo e React Native. Ele simplifica a configuração e o gerenciamento da navegação, permitindo o roteamento declarativo baseado em caminhos de arquivo.
- **`react` (`19.0.0`) & `react-native` (`0.79.3`):** As bibliotecas fundamentais para a construção de interfaces de usuário. React fornece o paradigma declarativo, enquanto React Native renderiza componentes nativos.
- **`nativewind` (`^4.1.23`) & `tailwindcss` (`^3.4.17`):** NativeWind integra o Tailwind CSS no React Native, permitindo a estilização utility-first para rápido desenvolvimento de UI e design consistente em todo o aplicativo.
- **`@reduxjs/toolkit` (`^2.8.2`) & `react-redux` (`^9.2.0`):** Redux Toolkit simplifica o desenvolvimento Redux, fornecendo utilitários opinativos, enquanto React Redux fornece ligações para conectar componentes React à store Redux para gerenciamento eficiente de estado.
- **`@expo-google-fonts/poppins` (`^0.4.0`):** Integra as Google Fonts (especificamente Poppins) no projeto Expo, fornecendo tipografia personalizada para uma estética de UI aprimorada.
- **`@expo/vector-icons` (`^14.1.0`):** Um conjunto abrangente de ícones vetoriais para projetos React Native e Expo, simplificando a inclusão de ícones na UI.
- **`@react-native-async-storage/async-storage` (`2.1.2`):** Fornece um sistema de armazenamento de chave-valor assíncrono, persistente e não criptografado para aplicativos React Native.
- **`expo-font` (`~13.3.1`):** Gerencia o carregamento e uso de fontes em aplicativos Expo, essencial para tipografia personalizada.
- **`react-native-reanimated` (`~3.17.4`):** Uma poderosa biblioteca de animação para React Native, permitindo animações suaves e performáticas com uma API declarativa.
- **`react-native-safe-area-context` (`5.4.0`):** Fornece um hook e componente para interagir com as insets de área segura, garantindo que os elementos da UI não sejam obscurecidos por entalhes do dispositivo ou barras do sistema.

---

### iv. Dificuldades Encontradas e Como Foram Resolvidas

- **Lidando com buscas performáticas:**

  - **Resolução:** Resolvido aplicando a função debounce ao campo de busca.

- **Rolagem Infinita em uma lista que não possui uma resposta de paginação:**

  - **Resolução:** Aplicando técnicas de limite e início
