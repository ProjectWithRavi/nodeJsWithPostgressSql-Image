import express from 'express';
import sequelize from './config/database.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Sync database and start server
const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});