const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configuração do CORS
app.use(cors());
app.use(express.json()); // Para analisar requisições com JSON

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_MiniProjeto',
  password: 'root',
  port: 5432,
});

// Rota para obter os CLIENTES
app.get('/api/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cliente');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar os clientes');
  }
});

// Rota para obter os PRODUTOS
app.get('/api/produtos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produto');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar os clientes');
  }
});

// Rota para obter os   
app.get('/api/pedidos', async (req, res) => {
  const result = await pool.query(`
    SELECT p.id_pedido, p.status, c.nome_cliente, c.email_cliente, 
           pr.nome_produto, pp.quantidade
    FROM pedido p
    JOIN cliente c ON p.id_cliente = c.id_cliente
    JOIN pedido_produto pp ON p.id_pedido = pp.id_pedido
    JOIN produto pr ON pp.id_produto = pr.id_produto
  `);
  res.json(result.rows);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});