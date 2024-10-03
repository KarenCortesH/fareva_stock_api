const User = require('./userModel');

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
	const { _id, username, password, role } = req.body;
	const newUser = new User({ _id, username, password, role });
	try {
		const user = await newUser.save();
		res.status(201).json(user);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
