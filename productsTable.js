const pool = require('./dbConnection');

// Define products table schema
const createProductsTable = async () => {
  const connection = await pool.getConnection();
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NULL
      )
    `);
  } finally {
    connection.release();
  }
};

// Insert data into products table
const insertProducts = async (products) => {
  const connection = await pool.getConnection();
  try {
    console.log("products", products);
    for (const product of products) {
      const categories = JSON.stringify(product.categories);
      const variations = JSON.stringify(product.variations);
      const sql = 'INSERT INTO products (id, name, description) VALUES (?, ?, ?)';
      const values = [product.id, product.name, product.description ]
      await connection.execute(sql, values);
    }
  } catch (error) {
    console.error(error);
  } finally {
    connection.release();
  }
};

module.exports = {
  createProductsTable,
  insertProducts,
};
