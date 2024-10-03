//Conexión a la base de datos
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		//Usar `mongoose.connect` con la URL de la BD.
		await mongoose.connect(process.env.MONGO_URI, {
			// Para usar el nuevo parser de URL de MongoDB.
			useNewUrlParser: true,
			// Usar el motor de monitoreo más reciente.
			useUnifiedTopology: true,
		});
		// Confirmación de conexión exitosa.
		console.log('MongoDB connected successfully!');
		//Capturar y manejar los errores en la conexión.
	} catch (err) {
		// Mostrar el error en consola.
		console.error(`MongoDB connection error: ${err.message}`);
		//Finalizar el proceso si hay un error crítico.
		process.exit(1);
	}
};

module.exports = connectDB;
