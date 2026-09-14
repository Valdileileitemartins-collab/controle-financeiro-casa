CONTROLE FINANCEIRO DA CASA 2.0

Requisitos: Node.js 18 ou superior.

1) Abra um terminal na pasta do projeto.
2) Execute: npm install
3) Execute: npm start
4) Abra http://localhost:3000

Login inicial:
Usuário: admin
Senha: 1234

Recursos:
- múltiplos usuários
- receitas/despesas
- parcelamento
- cartões de crédito
- contas recorrentes
- orçamento mensal
- gráficos
- backup do banco
- alteração de senha

Para produção:
- defina SESSION_SECRET com uma chave longa e aleatória
- use HTTPS
- mantenha backups fora do mesmo servidor
- altere a senha inicial imediatamente

Observação: o sistema gera backup sob demanda pelo botão Backup. Para backup automático em produção, agende /api/backup no servidor ou use o mecanismo de agendamento do provedor.
