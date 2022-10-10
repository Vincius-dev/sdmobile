const express = require ('express')
//mysql é o nome de uma variável, pode ser qualquer coisa
//mysql parece mais intuitivo do que mysql2
const mysql = require('mysql2')
const app = express()
app.use(express.json())
app.get('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'teste',
        database: 'hospital',
        password: '1234'
    })
    connection.query('SELECT * FROM tb_medico', (err, results, fields) => {
        res.json(results)
    })
})

app.get('/pacientes', (req, res) => {
        const connection = mysql.createConnection({
        host: 'localhost',
        user: 'rodrigo',
        database: 'hospital',
        password: '1234'
        })
    connection.query('SELECT * FROM tb_paciente', (err, results, fields) =>
    {
        res.json(results)
    })
})

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))