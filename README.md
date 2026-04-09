# Gerenciador de tarefas

Projeto React + Vite preparado para deploy estático.

## Medidas de segurança aplicadas

- Entradas do usuário são normalizadas antes de entrar no estado da aplicação.
- Campos possuem limite de tamanho para reduzir abuso e dados inesperados.
- O `index.html` inclui `Content-Security-Policy`, `Referrer-Policy` e `Permissions-Policy`.
- Arquivos sensíveis de ambiente foram adicionados ao `.gitignore`.

## Checklist antes de publicar no GitHub

- Nunca coloque segredos, tokens ou chaves em arquivos do frontend.
- Se precisar de variáveis públicas do Vite, use apenas valores que podem ser expostos no navegador.
- Revise se não existe `.env`, credenciais, logs ou arquivos de build antigos no repositório.
- Rode `npm install` e `npm run build` localmente antes do deploy.

## Observação importante

Como este é um frontend estático, qualquer valor enviado para o navegador pode ser visto por outras pessoas. Se no futuro você precisar de autenticação real, banco de dados protegido ou chaves secretas, isso deve ficar em um backend, não neste repositório.
