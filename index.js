const express = require("express")

const app = express()
app.use(express.json())

// string
// number
// object
// array

app.get('/users', (req, res) => {
    const isString = 'este é um teste'
    console.log('isString é to tipo ' + typeof isString)

    const isNumber = 1234
    console.log('isNumber é to tipo ' + typeof isNumber)

    const isObject = {
        nome: 'Vitor',
        cpf: '11644821737',
        dataNascimento: '07/04/1986',
        dataAtual: new Date(),
        endereco: {
            rua: 'ferreira de menezes',
            numero: 155
        },
        pedidos: [1, 5, 56, 98],
        chamar: () => {
            return 'Cola ae, Vitor!'
        }
    }
    console.log(isObject.chamar())
    console.log('isObject é to tipo ' + typeof isObject)
    console.log(isObject)
                     // 0     // 1     // 2
    const isArray = ['Cássio', 'Leo', 'Rafa']
    console.log('isArray é to tipo ' + typeof isArray)



    return res.json({
        mensagem: 'Coletar informações do meu servidor'
    });
})

app.post('/users', (req, res) => {
    return res.json({
        mensagem: 'Entregar informações para serem tratadas no meu servidor',
        informacao: 'O ' + req.body.nome + ' prefere home office'
    });
});

app.listen(1234, () => {
    console.log('Servidor ON')
})
