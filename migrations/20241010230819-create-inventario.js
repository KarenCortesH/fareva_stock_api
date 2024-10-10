'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Inventarios', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			fecha: {
				type: Sequelize.DATE
			},
			proveedor: {
				type: Sequelize.STRING
			},
			tipoDimension: {
				type: Sequelize.STRING
			},
			tipoRelleno: {
				type: Sequelize.STRING
			},
			tamañoParticula: {
				type: Sequelize.STRING
			},
			serialLote: {
				type: Sequelize.STRING
			},
			parte: {
				type: Sequelize.STRING
			},
			estado: {
				type: Sequelize.STRING
			},
			observaciones: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Inventarios');
	}
};
