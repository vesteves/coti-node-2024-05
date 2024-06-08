import { Router } from 'express'
import userController, { store, remove, update } from './user.controller'
import { validateSchema } from '../../middleware/validateSchema'
import { isAuthenticated } from '../../middleware/isAuthenticated'
import { userStoreSchema, userUpdateSchema } from './user.schema'

const router = Router()

router.get('/', async (req, res) => {
    const result = await userController.getAll()
    return res.status(200).json([
        ...result
    ])
})

router.post('/', isAuthenticated, validateSchema(userStoreSchema), async (req, res) => {
    const result = await store(res.locals.validated)

    return res.status(200).json(result)
})

router.delete('/:_id', async (req, res) => {
    const result = await remove({
        _id: req.params._id,
    })

    return res.json(result)
})

router.put('/:_id', validateSchema(userUpdateSchema), async (req, res) => {
    const result = await update({
        _id: req.params._id,
        ...res.locals.validated
    })

    return res.status(200).json(result)
})

export default router