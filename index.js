import axios from 'axios';
import { createProductsTable, insertProducts } from './productsTable';

// Fetch data from API
const fetchData = async () => {
  const response = await axios.get('https://raw.githubusercontent.com/Exove/developer-test/main/material/products.json');
  const {products} = await response.data;
  return products;
};

// Create products table and insert data
const main = async () => {
  try {
    // Create products table
    await createProductsTable();

    // Fetch data from API
    const products = await fetchData();

    // Insert data into products table
    const result = await insertProducts(products);

    console.log('Data inserted successfully');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

main();
