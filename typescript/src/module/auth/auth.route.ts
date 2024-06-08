import { Router } from 'express'
import { login, me } from './auth.controller'
import { loginSchema } from './auth.schema'
import { validateSchema } from '../../middleware/validateSchema'

const router = Router()

router.post('/login', validateSchema(loginSchema), async (req, res) => {
  try {
    const result = await login(res.locals.validated)

    return res.json(result)
  } catch (e: any) {
    return res.status(400).json({
      error: e.message
    })
  }
})

router.get('/me', async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500)
  }
  const result = await me(req.headers.authorization.split('bearer ')[1])
  return res.json(result)
})

export default router