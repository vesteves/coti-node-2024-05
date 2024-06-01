import jwt from 'jsonwebtoken'
import { getOne, getOneById } from '../user/user.controller'

// cassio 08iokyuclaro VALIDADE
// rafaela op1207 VALIDADE

interface LoginParams {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginParams) => {
  const userRaw = await getOne({ email })
  if (!userRaw) {
    return {
      error: 'Usuário não encontrado'
    }
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

  return {
    error: 'Não autenticado'
  }
}

export const me = async (token: string) => {
  try {
    const isAuth = jwt.verify(token, 'secret')
    const userRaw = await getOneById({ _id: isAuth as string })

    if (userRaw) {
      const user = userRaw.toObject();
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