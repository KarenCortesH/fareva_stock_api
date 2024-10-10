const mongoose = require('mongoose');

const InventoryLogSchema = new mongoose.Schema({
	_id: { type: Number, required: true },  // idRegistroInventarios en MySQL
	fechaRevision: { type: Date, required: false },
	lotes: { type: String, required: false },
	platosTericos: { type: String, required: false },
	resolucion: { type: String, required: false },
	factorTailing: { type: String, required: false },
	numeroINYTotales: { type: String, required: false },
	lavadoTiempoMin: { type: String, required: false },
	estado: { type: String, required: false },
	revisado: { type: String, required: false },
	observaciones: { type: String, required: false },
	usuarios_id: { type: Number, ref: 'User' },  // Relación a `User`
	inventarios_id: { type: Number, ref: 'Inventory' }  // Relación a `Inventory`
});

module.exports = mongoose.model('InventoryLog', InventoryLogSchema);
