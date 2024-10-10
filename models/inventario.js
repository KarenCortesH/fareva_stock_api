'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Inventario extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Inventario.init({
		fecha: DataTypes.DATE,
		proveedor: DataTypes.STRING,
		tipoDimension: DataTypes.STRING,
		tipoRelleno: DataTypes.STRING,
		tamañoParticula: DataTypes.STRING,
		serialLote: DataTypes.STRING,
		parte: DataTypes.STRING,
		estado: DataTypes.STRING,
		observaciones: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Inventario',
	});
	return Inventario;
};
