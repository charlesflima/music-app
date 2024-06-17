const express = require('express');
const app = express();
const db = require('./models');

const userRoutes = require('./routes/userRoutes');
const albumRoutes = require('./routes/albumRoutes');
const trackRoutes = require('./routes/trackRoutes');

console.log('Initializing application...');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/albums', albumRoutes);
app.use('/tracks', trackRoutes);

const PORT = process.env.PORT || 3000;

console.log('Syncing database...');
db.sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to sync the database:', error);
});
