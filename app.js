const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Cargar las variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
