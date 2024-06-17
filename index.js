require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require('express');
const app = express();
const db = require('./models'); // Importa os modelos do Sequelize

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
const { sequelize } = db; // Obtém a instância do Sequelize do arquivo models/index.js
const port = process.env.PORT || 3000;

// Exemplo de uso das variáveis configuradas
console.log(`Connecting to database at ${process.env.DB_HOST}:${port}...`);

// Inicializa o Sequelize e sincroniza os modelos com o banco de dados
sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  // Inicia o servidor Express
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Unable to sync the database:', error);
});

