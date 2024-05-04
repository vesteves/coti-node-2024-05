const express = require("express")

const app = express()
app.use(express.json())

const alunos = [
    {
        nome: "Rafa"
    },
    {
        nome: "Leo"
    },
    {
        nome: "Cássio"
    }
]

app.get('/users', (req, res) => {
    return res.json(alunos);
})

app.post('/users', (req, res) => {
    alunos.push({
        nome: req.body.nome
    })
    return res.json(alunos);
});

app.listen(1234, () => {
    console.log('Servidor ON')
})
