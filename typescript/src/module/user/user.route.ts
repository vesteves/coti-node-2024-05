import { Router } from 'express'
import userController, { store, remove, update } from './user.controller'

const router = Router()

router.get('/', async (req, res) => {
    const result = await userController.getAll()
    return res.status(200).json([
        ...result
    ])
})

router.post('/', async (req, res) => {
    const result = await store({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    return res.status(200).json(result)
})

router.delete('/:_id', async (req, res) => {
    const result = await remove({
        _id: req.params._id,
    })

    return res.json(result)
})

router.put('/:_id', async (req, res) => {
    const result = await update({
        _id: req.params._id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    return res.status(200).json(result)
})

export default router