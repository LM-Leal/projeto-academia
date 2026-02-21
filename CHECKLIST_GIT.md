# 📝 Checklist de Fluxo de Trabalho Git no VS Code

## ☀️ Ao Iniciar o Dia (Abrir o VS Code Antigravity)
**Objetivo:** Garantir que você está trabalhando com a versão mais recente do código para evitar conflitos futuros.

- [ ] **1. Verificar o status atual**
Descubra em qual branch você está e se há algo pendente da última sessão.
```bash
  git status
``` 
- [ ] **2. Voltar para a branch principal**
Antes de puxar as novidades, vá para a branch base do projeto (geralmente main ou develop).
```bash
  git checkout main   
```
- [ ] **3. Atualizar o repositório local**
Puxe todas as alterações que foram enviadas para a nuvem desde a sua última sessão.
```bash
  git pull origin main
```
- [ ] **4. Criar ou entrar na branch da sua tarefa**
Evite programar diretamente na ```main```. Crie uma branch isolada para a funcionalidade do dia.
Para criar uma nova branch:
```bash
  git checkout -b feature/nome-da-sua-tarefa
```
Se for continuar o trabalho em uma branch que já existe:
```bash
  git checkout feature/nome-da-sua-tarefa
```
## 🌙 Ao Finalizar o Trabalho (Antes de Fechar o VS Code Antigravity)
**Objetivo:** Salvar seu progresso de forma segura no repositório remoto (nuvem) e não deixar código perdido apenas na sua máquina.

- [ ] **1. Verificar o que foi modificado**
Revise rapidamente quais arquivos foram alterados, criados ou deletados hoje.
```bash
git status
```
- [ ] **2. Preparar os arquivos (Staging)**
Selecione os arquivos que farão parte do seu salvamento.
Para adicionar todos os arquivos modificados:
```bash
git add .
```
Para adicionar arquivos específicos (mais seguro se houver arquivos de teste soltos):
```bash
git add nome-do-arquivo.js
```
- [ ] **3. Criar o Commit**
"Empacote" as alterações com uma mensagem clara e direta sobre o que foi resolvido.
```bash
git commit -m "feat: adiciona modulo de cadastro de usuarios"
```
(Dica de padronização: use ```feat:``` para novas funcionalidades, ```fix:``` para correções de bugs e ```docs:``` para documentação).

- [ ] **4. Enviar para a nuvem (Push)**
Mande a sua branch com o novo commit para o repositório remoto.
Se for a primeira vez enviando essa branch:

```bash
git push -u origin feature/nome-da-sua-tarefa
```
Se a branch já existe lá na nuvem, basta:
```bash
git push
```