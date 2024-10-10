const express = require('express');
const pool = require('./src/config/config');
const app = express();

app.use(express.json());

// Definir una ruta de prueba para verificar la conexión
app.get('/usuarios', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM usuarios');
		res.json(result.rows);
	} catch (err) {
		console.error('Error en la consulta:', err.message);
		res.status(500).send('Error en la consulta');
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
