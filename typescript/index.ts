import express from 'express'

const app = express()

type Mare = 'alta' | 'baixa'

interface IsObject {
    id: number
    nome: string
    mare: Mare,
    idade?: number
}

app.get('/health', (req, res) => {
    const isString: string = 'Isto é um texto'
    const isNumber: number = 12
    const isObject: IsObject = {
        id: 1,
        nome: 'Vitor',
        mare: 'alta'
    }

    if(isObject.idade && isObject.idade < 20) {
        console.log('Aluno maior de idade')
    }

    const isArray: IsObject[] = [
        {
            id: 2,
            nome: 'Cássio',
            mare: 'baixa'
        },
        {
            id: 3,
            nome: 'Leo',
            idade: 20,
            mare: 'alta'
        }
    ]


 
    return res.json({
        msg: 'ok'
    })
})

app.listen(8000, () => {
    console.log('Typescript ON')
})
