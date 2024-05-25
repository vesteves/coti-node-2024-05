import { Router } from 'express'

// importação do modelo de usuário
import { userModel } from './user.model'

// a linha abaixo traz apenas Types de mongoose para este arquivo pois precisamos
// apenas do Types.ObjectId
import { Types } from 'mongoose'

const router = Router()

router.get('/', async (req, res) => {
    const result = await userModel.find()
    return res.status(200).json(result)
})

router.post('/', async (req, res) => {
    const result = await userModel.create({
        _id: new Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    return res.status(200).json(result)
})

router.delete('/:_id', async (req, res) => {
    const result = await userModel.deleteOne({
        _id: req.params._id,
    })

    return res.json(result)
})

router.put('/:_id', async (req, res) => {
    const result = await userModel.updateOne({
        _id: req.params._id
    }, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    return res.status(200).json(result)
})

export default router