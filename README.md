# Gerenciador de Tarefas

Aplicacao simples de lista de tarefas criada com React e Vite.

O projeto permite:

- adicionar tarefas
- marcar tarefas como concluidas
- remover tarefas da lista

## Tecnologias

- React
- Vite
- Tailwind CSS
- Lucide React

## Como executar o projeto

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Para gerar a versao de producao:

```bash
npm run build
```

## Estrutura principal

- `src/App.jsx`: componente principal e gerenciamento do estado das tarefas
- `src/assets/conponets/AddTasks.jsx`: formulario para adicionar tarefas
- `src/assets/conponets/Tasks.jsx`: lista e acoes das tarefas

## Cuidados para publicar no GitHub

- nao armazene senhas, tokens ou chaves no frontend
- mantenha arquivos `.env` fora do repositorio
- revise o `.gitignore` antes de subir o projeto
- execute o build localmente antes do deploy

## Seguranca aplicada

- sanitizacao basica dos textos antes de salvar no estado
- limite de caracteres nos campos do formulario
- politicas no `index.html` para restringir carregamento de recursos e permissoes do navegador

## Observacao

Como este projeto e um frontend estatico, tudo o que for enviado ao navegador pode ser visto por qualquer pessoa. Se no futuro voce precisar de autenticacao real, banco de dados protegido ou chaves privadas, isso deve ficar em um backend.
