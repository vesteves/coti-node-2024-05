import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//importação das rotas de usuário
import userRoute from './module/user/user.route'

//importação das rotas de autenticação
import authRoute from './module/auth/auth.route'

// criação do prefixo /user para ser utilizado em todas as todas de usuário
app.use('/user', userRoute)
app.use('/auth', authRoute)

app.get('/health', (req: Request, res: Response) => {
    return res.status(200).send("Ok")
})

app.listen(8000, () => {
    console.log('Servidor ON!')
})
