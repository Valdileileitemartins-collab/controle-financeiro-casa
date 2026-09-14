PUBLICAÇÃO ONLINE — CONTROLE FINANCEIRO DA CASA 2.0

A opção mais simples para colocar esta versão no Google Chrome é publicar em um servidor Node.js.
Este pacote já contém configuração para Render e usa disco persistente para o SQLite.

1. Crie uma conta no Render.
2. Crie um repositório no GitHub e envie TODOS os arquivos desta pasta.
3. No Render, crie um Web Service a partir do repositório.
4. O arquivo render.yaml pode ser usado como referência de configuração.
5. O serviço precisa de armazenamento persistente para manter o banco SQLite.
6. O endereço gerado pelo Render poderá ser aberto pelo Chrome no computador e no celular.
7. Depois, você pode ligar um domínio próprio.

Login inicial:
admin
1234

SEGURANÇA:
- Altere a senha inicial assim que entrar.
- Não compartilhe SESSION_SECRET.
- Use HTTPS.
- Faça backups externos periódicos.

BACKUP:
O sistema possui backup pelo botão "Backup". O arquivo backup.js também está incluído
para ser executado por um agendador/cron do servidor. Em um serviço gratuito, não conte
com armazenamento local persistente; o banco deve ficar em Postgres ou em um disco persistente.

IMPORTANTE:
Este pacote está preparado para publicação, mas eu não consigo criar a conta de hospedagem,
o GitHub ou registrar um domínio em seu nome sem você fazer login nessas contas.
