import { Router } from 'express'
import { login, me } from './auth.controller'

const router = Router()

router.post('/login', async (req, res) => {
  const result = await login({
    email: req.body.email,
    password: req.body.password
  })

  return res.json(result)
})

router.get('/me', async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500)
  }
  const result = await me(req.headers.authorization.split('bearer ')[1])
  return res.json(result)
})

export default router