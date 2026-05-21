# 🧹 Aula 3: Clean Code e Documentação de Software

A diferença entre um programador júnior e um sênior raramente é a complexidade do algoritmo, mas sim a clareza e manutenibilidade do código que entrega. Código legível economiza rios de dinheiro corporativo em treinamentos e retrabalhos.

## 1. Clean Code na Prática (Tio Bob)

### 1.1. Nomes Significativos e Booleanos
O código deve ser autoexplicativo ("Expressivo"). Variáveis booleanas devem responder a uma pergunta de sim/não (prefixos como `is`, `has`, `should`).

* **Ruim (Vago):**
  ```javascript
  const age = 20;
  let flag = true; // flag para o quê?
  if(flag && age > 18) { ... }
  ```
* **Bom (Profissional e Claro):**
  ```javascript
  const currentAge = 20;
  const isAdult = currentAge >= 18;
  const hasSubscribedPlan = true;
  
  if(isAdult && hasSubscribedPlan) { ... }
  ```

### 1.2. A Regra dos Comentários
**"Todo comentário é um pedido de desculpas por não ter conseguido expressar a lógica claramente no código."**
* Comentários NUNCA devem narrar o que o código faz (é redundante e o código desatualiza rápido).
* Comentários DEVEM documentar o "Porquê" ou um débito técnico.
* **Exemplo de Comentário Útil:**
  ```javascript
  // Regra de Negócio: O desconto máximo concedido para familiar é de 15% 
  // e depende da data de vencimento, conforme solicitação da Diretoria Financeira (Ticket #1542).
  const calculateFamilyDiscount = (basePrice) => { ... }
  ```

### 1.3. Formatação Automatizada
Humanos do mercado não arrumam tabulação manualmente.
Uma equipe real configura ferramentas automatizadas no projeto:
* **Prettier:** Define regras engessadas de quando quebrar linha e usar aspas simples ou duplas.
* **ESLint / SonarQube:** Verifica se há variáveis não utilizadas, 'console.logs' esquecidos e armadilhas de JS antes que o código permita ser salvo (commitado).

## 2. A Governança do Repositório (Arquivos .md)

Um repositório Open-Source ou Corporativo deve ser "auto-atendível". O novo desenvolvedor não deve precisar incomodar o sênior para rodar o projeto.

Esses arquivos são obrigatórios na raiz (`/`) do projeto corporativo:

### 📄 `README.md`
A entrada do projeto. Responde: O que é? Como instala? Como roda?
* Deve ter badges de status (ex: "Build Passing").
* Deve listar pré-requisitos (`Node.js >= 18`, `Docker`).

### 📄 `CHANGELOG.md`
A comunicação com os analistas e clientes sobre o que entrou na versão lançada (seguindo semantic versioning v1.0, v1.1).
* Agrupamentos vitais: `[Added]`, `[Changed]`, `[Fixed]`, `[Removed]`.

### 📄 `CONTRIBUTING.md`
Para novos membros. Diz como faturar a branch no Git (ex: `feature/nome-da-feature`) e o padrão de formatação de código exigido pelo time.

### 📄 `.env.example`
Fornece as chaves de configuração vazias (templates). O desenvolvedor que baixa o projeto copia o `.env.example` renomeando para `.env` e colocando credenciais do banco local.

---
*Fim da Fase Teórica. Agora passaremos para o Guia Prático Arquitetural.*
