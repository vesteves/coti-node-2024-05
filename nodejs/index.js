const express = require("express")

const app = express()
app.use(express.json())

let alunos = [
    {
        id: 1,
        nome: "Rafa"
    },
    {
        id: 2,
        nome: "Leo"
    },
    {
        id: 3,
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

app.put('/users/:id', (req, res) => {
    console.log(req.params.id)

    // meu contador vai começar na posição ZERO (let i = 0;)
    // enquando o contador for menor do que o tamanho do meu array (i < alunos.length)
    // eu incremento o meu contador em 1 posição para frente (i = i + 1)
    for(let i = 0; i < alunos.length; i = i + 1) {
        // console.log(alunos[i].nome + ' - ' + alunos[i].id);
        if(alunos[i].id == req.params.id) {
            alunos[i].nome = req.body.nome
        }
    }
    
    return res.json({
        msg: 'atualizado com sucesso!'
    });
})

app.delete('/users/:id', (req, res) => {
    alunos = alunos.filter((item) => {
        return item.id != req.params.id
    })

    return res.json({
        msg: 'removido com sucesso!'
    });
})

app.listen(1234, () => {
    console.log('Servidor ON')
})
