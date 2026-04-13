<div align="center"> <h1 align="center">🚀 Personal Hub - Marcelo Novello</h1>
Dashboard modular desenvolvido com Vue 3, Vite e Pinia, focado na centralização de recursos estratégicos para a preparação do exame Petrobras 2026 e gestão acadêmica no IBMR. Projeto fundamentado em Screaming Architecture e Clean Code.

<p align="center">
  <a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" />
  </a>
  <a href="https://pinia.vuejs.org/">
    <img src="https://img.shields.io/badge/Pinia-FFD700?style=flat&logo=pinia&logoColor=black" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat" />
  </a>
  <img src="https://img.shields.io/github/stars/marcelonovello/personal-hub?style=flat&logo=github" />
</p></div>

---

<a id="visao-geral"></a>
## 🔎 Visão Geral

O sistema "Personal Hub" permite:
- **Gestão de Links:** CRUD completo de referências técnicas e editais.
- **Arquitetura Modular:** Separação clara entre módulos de Autenticação e Hub de Conteúdo.
- **Persistência Local:** Sincronização automática do estado (Pinia) com LocalStorage.
- **Categorização Contextual:** Organização dinâmica de links (Estudo, Trabalho, Pessoal).

> 💡 **Por que este projeto é relevante?** > Demonstra a aplicação de **Screaming Architecture** em ecossistemas Frontend, focando em escalabilidade, tipagem forte com **TypeScript** e UX reativa.

---

### ✨ Funcionalidades Principais
- 📂 Organização modular por domínio (Auth/Hub)
- 🔐 Proteção de rotas com Navigation Guards
- 🎨 UI Dark Mode customizada com Tailwind CSS
- 🔔 Sistema de notificações (Toasts) para feedback do usuário

---

<a id="execucao-local"></a>
## 🚀 Execução Local

### ⚙️ Pré-requisitos
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) (v18+)
- Gerenciador de pacotes npm ou yarn

### ⬇️ Como executar o projeto
1️⃣ Clone o repositório:
```bash
git clone [https://github.com/marcelonovello/personal-hub.git](https://github.com/marcelonovello/personal-hub.git)
cd personal-hub
```

2️⃣ Instale as dependências
```bash
npm install
```

3️⃣ Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4️⃣ Acesse no navegador:
```bash
http://localhost:5173
```

<a id="estrutura-do-projeto"></a>

🏗 Estrutura do Projeto
```sh
└──📦 src/
    ├── 📂 app/             # Configurações globais (Router, Store, CSS)
    ├── 📂 modules/         # Módulos de negócio (Screaming Architecture)
    │   ├── 📂 auth/        # Lógica de login e proteção
    │   └── 📂 hub/         # Funcionalidades de Links e Dashboard
    ├── 📂 shared/          # Componentes reutilizáveis (Header, Menu, etc.)
    └── 📄 main.ts          # Ponto de entrada da aplicação
```

---

<a id="licenca"></a>
## 📄 Licença

Licença MIT. Consulte o arquivo [LICENSE](LICENSE).

---

<a id="aprendizados"></a>
## 📚 Aprendizados
- ⚡ Vue 3 Composition API: Reutilização de lógica e reatividade avançada.
- 🍍 Pinia State Management: Gerenciamento de estado global e persistência.
- 🛠 Modular Design: Estruturação de projetos focada na intenção do sistema.
- 🌳 Git Flow: Uso de branches (feat/, docs/, develop) para gestão de versão.

1. **Faça um Fork** do repositório.  
2. **Crie uma Branch** para sua feature ou correção:  
```bash
   git checkout -b feat/minha-feature
```
3. Confirme as mudanças (commits) com mensagens claras no padrão **Conventional Commits**.
4. Envie para seu Fork e abra um Pull Request.

 ---

<a id="contato"></a>
## 📬 Contato

- **Autor:** Marcelo Novello  
- **GitHub:** [marcelonovello](https://github.com/marcelonovello)  
- **LinkedIn:** [Marcelo Novello](https://www.linkedin.com/in/marcelo-novello/)

---