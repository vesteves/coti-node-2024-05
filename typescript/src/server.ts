import express, { Request, Response } from 'express'

//importação das rotas de usuário
import userRoute from './module/user/user.route'

const app = express()
app.use(express.json())

// criação do prefixo /user para ser utilizado em todas as todas de usuário
app.use('/user', userRoute)

app.get('/health', (req: Request, res: Response) => {
    return res.status(200).send("Ok")
})

app.listen(8000, () => {
    console.log('Servidor ON!')
})
