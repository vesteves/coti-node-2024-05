import jwt from 'jsonwebtoken'
import { getOne, getOneById } from '../user/user.controller'

interface LoginParams {
  email: string
  password: string
}

interface User {
  _id: string;
  name?: string;
  email?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface UserResult {
  error?: string;
  _id?: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const userRaw = await getOne({ email })
  if (!userRaw) {
    throw new Error('Usuário não encontrado')
  }

  const user = userRaw.toObject()

  if (user.password === password) {
    delete user.password

    const token = jwt.sign({
      _id: user._id
    }, 'secret')

    return {
      user,
      token
    }
  }

  throw new Error('Não autenticado')
}

export const me = async (token: string): Promise<UserResult | undefined> => {
  try {
    const isAuth = jwt.verify(token, 'secret')
    const userRaw = await getOneById({ _id: isAuth as string })

    if (userRaw) {
      const user = userRaw.toObject() as User;
      delete user.password

      return user
    }
  } catch (error: any) {
    return {
      error: 'Falha ao decodificar o token'
    }
  }
}

export default {
  login
}