require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require('express');
const app = express();
const db = require('./models'); // Importa os modelos do Sequelize, se aplicável

// Rotas da aplicação
const userRoutes = require('./routes/userRoutes');
const albumRoutes = require('./routes/albumRoutes');
const trackRoutes = require('./routes/trackRoutes');

// Middleware para permitir o uso de JSON nas requisições
app.use(express.json());

// Registra as rotas da API
app.use('/users', userRoutes);
app.use('/albums', albumRoutes);
app.use('/tracks', trackRoutes);

// Configurações do banco de dados
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const port = process.env.PORT || 3000;

// Exemplo de uso das variáveis configuradas
console.log(`Connecting to database at ${host}:${port}...`);

// Exemplo de uso do Sequelize
db.sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Unable to sync the database:', error);
});

