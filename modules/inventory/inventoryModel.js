const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
	_id: { type: Number, required: true },  // idInventarios en MySQL
	fecha: { type: Date, required: false },
	proveedor: { type: String, required: false },
	tipoDimension: { type: String, required: false },
	tipoRelleno: { type: String, required: false },
	tamañoParticula: { type: String, required: false },
	serialLote: { type: String, required: false },
	parte: { type: String, required: false },
	estado: { type: String, required: false },
	observaciones: { type: String, required: false }
});

module.exports = mongoose.model('Inventory', InventorySchema);
