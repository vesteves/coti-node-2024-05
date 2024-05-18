import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/local');

const Aula1Schema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome: String,
},
{
    timestamps: true,
    versionKey: false
})

const Aula1Model = mongoose.model('aula1', Aula1Schema)

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

app.get('/', async (req, res) => {
    const result = await Aula1Model.find({});
    return res.json(result)
})

app.post('/', async (req, res) => {
    console.log(req.body)
    const nome = req.body.nome
    const result = await Aula1Model.create({
        _id: new mongoose.Types.ObjectId,
        nome
    })
    return res.json(result)
})

app.delete('/:_id', async (req, res) => {
    const result = await Aula1Model.deleteOne({
        _id: req.params._id
    })
    return res.json(result)
})

app.put('/:_id', async (req, res) => {
    const result = await Aula1Model.updateOne({
        _id: req.params._id
    }, {
        nome: req.body.nome
    })
    return res.json(result)
})

app.listen(8000, () => {
    console.log('Typescript ON')
})
