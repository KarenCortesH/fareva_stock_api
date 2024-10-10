'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class RegistroInventario extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	RegistroInventario.init({
		fechaRevision: DataTypes.DATE,
		lotes: DataTypes.STRING,
		platosTeoricos: DataTypes.STRING,
		resolucion: DataTypes.STRING,
		factorTailing: DataTypes.STRING,
		numeroInyTotales: DataTypes.STRING,
		lavadoTiempoMin: DataTypes.STRING,
		estado: DataTypes.STRING,
		revisado: DataTypes.STRING,
		observaciones: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'RegistroInventario',
	});
	return RegistroInventario;
};
