'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('RegistroInventarios', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			fechaRevision: {
				type: Sequelize.DATE
			},
			lotes: {
				type: Sequelize.STRING
			},
			platosTeoricos: {
				type: Sequelize.STRING
			},
			resolucion: {
				type: Sequelize.STRING
			},
			factorTailing: {
				type: Sequelize.STRING
			},
			numeroInyTotales: {
				type: Sequelize.STRING
			},
			lavadoTiempoMin: {
				type: Sequelize.STRING
			},
			estado: {
				type: Sequelize.STRING
			},
			revisado: {
				type: Sequelize.STRING
			},
			observaciones: {
				type: Sequelize.STRING
			},
			// Definición de la clave foránea a la tabla `Usuarios`
			Usuarios_idUsuarios: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Usuarios', // Nombre de la tabla a la que hace referencia
					key: 'id',         // Columna de la tabla a la que hace referencia
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
			// Definición de la clave foránea a la tabla `Inventarios`
			Inventarios_idInventarios: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Inventarios', // Nombre de la tabla a la que hace referencia
					key: 'id',            // Columna de la tabla a la que hace referencia
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
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
		await queryInterface.dropTable('RegistroInventarios');
	}
};
