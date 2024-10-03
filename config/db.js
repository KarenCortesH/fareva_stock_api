//Conexi�n a la base de datos
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		//Usar `mongoose.connect` con la URL de la BD.
		await mongoose.connect(process.env.MONGO_URI, {
			// Para usar el nuevo parser de URL de MongoDB.
			useNewUrlParser: true,
			// Usar el motor de monitoreo m�s reciente.
			useUnifiedTopology: true,
		});
		// Confirmaci�n de conexi�n exitosa.
		console.log('MongoDB connected successfully!');
		//Capturar y manejar los errores en la conexi�n.
	} catch (err) {
		// Mostrar el error en consola.
		console.error(`MongoDB connection error: ${err.message}`);
		//Finalizar el proceso si hay un error cr�tico.
		process.exit(1);
	}
};

module.exports = connectDB;
