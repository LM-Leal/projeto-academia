# Plano Arquitetural: PWA Academia (Gym Tracker)

Este documento dita como a teoria aprendida se transformará em software funcional, seguindo os padrões de mercado e focando nos objetivos do treinamento.

## Arquitetura e Engenharia

Optamos por uma arquitetura focada em Frontend Moderno (SPA + PWA) que consome dados locais (inicialmente) para simular o banco de dados.

* **Stack:** Vite + React + Vanilla CSS
* **Gerenciamento de Estado:** React `useState` e Context API
* **Persistência:** `localStorage` (para simular uma base offline-first)
* **PWA Engine:** `vite-plugin-pwa` (para gerar o Manifest e gerenciar o cache do Service Worker de forma automatizada).

## Estrutura de Diretórios Planejada

Seguindo o princípio de separação de responsabilidades (Clean Architecture no Frontend), o projeto terá a seguinte hierarquia dentro de `src/`:

```
/src
 ├── /assets          # Imagens, Ícones PWA, Fonts
 ├── /components      # Componentes visuais burros (Botões, Inputs, Cards de Treino)
 ├── /config          # Configurações de ambiente (config.js)
 ├── /context         # Context API (Estados Globais - Ex: Usuário Logado)
 ├── /hooks           # Custom hooks (ex: useTreinos, useInstallPWA)
 ├── /pages           # As visualizações de roteamento (Home, Login, Treino Ativo)
 ├── /services        # Serviços externos (Simulação de chamadas API/LocalStorage)
 ├── /styles          # CSS Base global e utilitários
 ├── App.jsx          # Ponto de entrada das Rotas
 └── main.jsx         # Injeção no DOM e registro do Service Worker
```

## Entidades de Dados (O que vamos simular no Banco)

Precisaremos das seguintes tipagens (contratos) de dados para o funcionamento do app:

1. **User (Aluno):** `{ id, name, goal (hipertrofia/emagrecimento), weight }`
2. **Workout (Treino):** `{ id, title (Ex: Treino A - Peito), dayOfWeek }`
3. **Exercise (Exercício):** `{ id, workoutId, name, sets (Séries), reps (Repetições), restTime (Descanso) }`
4. **Log (Histórico):** `{ id, userId, workoutId, date, completedExercises }`

## Como Iniciaremos (Passo a Passo da Próxima Fase)

1. **Setup do Projeto:** Rodaremos o comando padrão do Vite para gerar o boilerplate React.
2. **Limpeza do Boilerplate:** Exclusão de arquivos genéricos gerados pelo Vite que não cabem ao projeto e inclusão do `vite-plugin-pwa`.
3. **Configuração de Estilos e Config:** Criação da formatação de cores globais no CSS e o `config.js` orientado a objetos.
4. **Modelagem do Banco Local:** Criação do módulo dentro de `/services` para salvar e ler treinos do usuário no LocalStorage.
5. **Criação da Tela Principal (Home):** Puxar os treinos salvos e criar a interface com PWA Manifest pronto para instalar no celular.

---
**Observação Estratégica:**
Em um ambiente corporativo, a Fase 1 (Setup e Limpeza) é chamada de *Sprint Zero*. Onde preparamos o terreno (arquitetura) antes de codificar a tela visual.
