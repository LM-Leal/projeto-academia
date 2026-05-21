# 🛡️ Aula 2: Segurança da Informação (Security by Design)

Como Engenheiro de Software, um de seus papéis é garantir que o sistema proteja os dados do usuário desde a sua concepção, aplicando controles da ISO 27002 no desenvolvimento.

## 1. Princípios Básicos de Segurança Web

Um App de Academia lida com **Dados Pessoais Sensíveis** (peso, percentual de gordura, histórico de saúde). Pela LGPD (Lei Geral de Proteção de Dados), vazamentos geram multas críticas.

### 1.1. Criptografia em Trânsito (HTTPS Obrigatório)
Para um PWA funcionar (instalar *Service Workers*), o navegador **exige** que ele seja servido sob HTTPS (exceto em localhost para testes).
* **Por quê?** Prevenir ataques de *Man-In-The-Middle* (MitM), onde um hacker intercepta a rede Wi-Fi da academia e espiona o tráfego não encriptado do aluno.

### 1.2. Controle de Acesso (Authentication & Authorization)
* **Autenticação (Quem é você?):** O sistema deve provar que João é o João. Utilizaremos JWT (JSON Web Tokens) ou Cookies HTTP-Only gerados pela API backend.
* **Autorização (O que você pode fazer?):** 
  * Um usuário com perfil `ALUNO` só pode ver seu próprio treino.
  * Um usuário perfil `INSTRUTOR` pode criar treinos, mas não de alunos de outra unidade.
  * **Regra de Ouro:** A autorização DEVE acontecer no Servidor (Backend). O Frontend (React/PWA) apenas oculta os botões na tela, pois *qualquer regra validada apenas no navegador pode ser burlada (falsificada)*.

## 2. Prevenção às Vulnerabilidades Mais Comuns (OWASP Top 10)

O mercado baseia-se na cartilha da OWASP para checar falhas. No nosso PWA, as principais são:

### 2.1. XSS (Cross-Site Scripting)
Acontece quando um invasor injeta scripts maliciosos em um campo de formulário que é lido por outros usuários.
* **Exemplo de Ataque:** Um aluno nomeia seu "Plano de Treino" como `<script>alert('Roubei sua senha')</script>`.
* **Como Prevenir:** Frameworks modernos como o React já fazem o *escape* automático do texto renderizado (transformando as tags em texto literal inofensivo). Se usássemos Vanilla HTML puro usando `innerHTML`, teríamos que tratar isso manualmente usando funções de limpeza.

### 2.2. Armazenamento Inseguro no Navegador
Em PWAs, o desenvolvedor é tentado a salvar tudo no `localStorage` do navegador para o app funcionar offline.
* **Regra Corporativa:** Nunca, em hipótese alguma, salve tokens de acesso de longa duração, senhas ou dados altamente sigilosos no `localStorage` em texto limpo. Tokens devem idealmente estar em *Secure/Http-Only Cookies* ou ser geridos rigorosamente por serviços em memória, persistindo o mínimo necessário de forma ofuscada para o PWA relogar.

---
*Fim da Aula 2. Próximo Tópico: Clean Code e Documentação Viva.*
