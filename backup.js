// backup.js
// Run daily with the hosting provider's scheduler/cron.
// Example: node backup.js
const fs = require('fs');
const path = require('path');
const storage = process.env.DEPLOY_STORAGE || '.';
const db = path.join(storage, 'financeiro.db');
const dir = path.join(storage, 'backups');
if (!fs.existsSync(db)) throw new Error('Banco ainda não existe.');
fs.mkdirSync(dir, {recursive:true});
const stamp = new Date().toISOString().replace(/[:.]/g,'-');
const dest = path.join(dir, `financeiro-${stamp}.db`);
fs.copyFileSync(db, dest);
console.log(`Backup criado: ${dest}`);
