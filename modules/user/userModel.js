const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	_id: { type: Number, required: true },  // idUsuarios en MySQL
	username: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
