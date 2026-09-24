import { pool } from './database/db.js';

export class produtosService {
    
        async getAll() {
        const res = await pool.query("SELECT * FROM produtos RETURNING *")
        return res.rows;

        }

         async creates(nome, marca, categoria, preco, quantidade_estoque) {
        const res = await pool.query("INSERT INTO produto VALUES (1$, 2$, $3, $4, 5%) RETURNING *"
        [nome, marca, categoria, preco, quantidade_estoque]);
        return res.rows[0];



         }

}