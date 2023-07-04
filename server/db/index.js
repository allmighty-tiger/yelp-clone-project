// import { Pool } from 'pg'
import pkg from 'pg';
const { Pool } = pkg;
 
const pool = new Pool()
 
 const query = (text, params) => pool.query(text, params);
 export default query