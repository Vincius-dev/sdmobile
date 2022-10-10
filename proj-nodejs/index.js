require ('dotenv').config()
const express = require ('express')
//mysql é o nome de uma variável, pode ser qualquer coisa
//mysql parece mais intuitivo do que mysql2
const mysql = require('mysql2')
const app = express()
app.use(express.json())

const {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = process.env

app.get('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD
    })
    connection.query('SELECT * FROM tb_medico', (err, results, fields) => {
        res.json(results)
    })
})

app.post('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD
    })

    const crm = req.body.crm
    const nome = req.body.nome
    const sql = "INSERT INTO tb_medico (crm, nome) VALUES (?, ?)"

    connection.query(sql, [crm, nome], (err, results, fields) => {
        console.log (results)
        console.log(fields)
        res.send('ok')
    })
})

app.get('/pacientes', (req, res) => {
        const connection = mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
        password: DB_PASSWORD
        })
    connection.query('SELECT * FROM tb_paciente', (err, results, fields) =>
    {
        res.json(results)
    })
})

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))