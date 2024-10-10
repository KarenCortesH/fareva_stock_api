const { Pool } = require('pg');

const pool = new Pool({
	user: process.env.DB_USER || 'devKc',
	host: process.env.DB_HOST || 'localhost',
	database: process.env.DB_NAME || 'fareva_stock_control',
	password: process.env.DB_PASSWORD || 'BdKC*',
	port: process.env.DB_PORT || 5432,
});

module.exports = pool;
