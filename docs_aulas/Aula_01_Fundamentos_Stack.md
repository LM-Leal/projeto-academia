# 🎓 Aula 1: Fundamentos da Web e Progressive Web Apps (PWAs)

## 1. O que é um PWA e por que usá-lo?

Um **Progressive Web App (PWA)** é uma aplicação web que utiliza tecnologias modernas para oferecer uma experiência de usuário semelhante à de um aplicativo nativo. 

### Principais Características (O que o mercado espera):
* **Confiabilidade (Offline-first):** Carrega instantaneamente e nunca mostra o dinossauro do Chrome, mesmo em redes instáveis. Isso é feito através de *Service Workers*.
* **Velocidade:** Responde rapidamente às interações do usuário, com animações fluidas e sem *jank* (engasgos na rolagem).
* **Engajamento:** Pode ser instalado na tela inicial do dispositivo (Android/iOS) e enviar notificações Push.

**Contexto no nosso Projeto (App de Academia):**
Imagine um aluno na academia. O sinal de internet (3G/4G/Wi-Fi) lá dentro costuma ser péssimo. Se o app não carregar o treino offline, ele abandona o uso. O PWA resolve esse problema exato arquivando a estrutura (HTML/CSS) e os dados locais no dispositivo do usuário.

## 2. Decisão Arquitetural: Stack Tecnológico

A escolha das ferramentas ditará a manutenibilidade do nosso projeto pelos próximos anos.

### 2.1. Frameworks vs. Vanilla (Puro)

* **Abordagem Vanilla (HTML/CSS/JS Puro):** 
  * *Vantagem:* Perfeito para entender a "física" da Web (DOM manipulação manual).
  * *Desvantagem:* Em aplicações altamente interativas (como marcar exercícios concluídos, contadores de tempo), o código rapidamente se torna "Espaguete" (difícil de ler e manter).
* **A Escolha do Mercado (React/Vue/Next.js):**
  * *Por que React?* Ele lida com a *reatividade* de forma declarativa. Quando o "estado" (status do treino) muda, o React atualiza apenas a parte da tela necessária (Virtual DOM), mantendo o código modular e organizado em *Componentes* (ex: `<BotaoExercicio />`, `<Cronometro />`).
  * *Nossa Decisão Didática:* Vamos utilizar **Vite + React**. O Vite é um *bundler* moderno e extremamente rápido. Ele traz menos "mágica" que o Next.js, exigindo que você entenda fundamentos de roteamento e estado do cliente, o que é ideal para o seu aprendizado de Engenharia de Software.

### 2.2. O Arquivo de Configuração (`config.js`)

Aplicações profissionais JAMAIS expõem chaves de API, URLs de banco ou segredos diretamente no código-fonte do repositório. Seguimos o princípio da *Separação de Configuração do Código* (metodologia 12-Factor App).

Em nosso PWA (futuro), teremos um padrão parecido com este:

```javascript
// Exemplo didático de padrão corporativo: src/config/index.js
export const config = {
  // A URL da API muda se estamos no PC do dev (localhost) ou em Produção
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  
  // Variáveis de negócio centralizadas
  maxImageUploadSize: 5 * 1024 * 1024, // 5MB
  
  // Flag de ambiente
  isProduction: import.meta.env.PROD
};
```
* **Por quê?** Se amanhã a URL do seu servidor mudar, você edita **um único arquivo** (`.env`), sem precisar recompilar e buscar a URL espalhada em 50 arquivos diferentes.

---
*Fim da Aula 1. Próximo Tópico: Segurança da Informação (ISO 27001) Aplicada ao Código.*
