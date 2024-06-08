import { Request, Response, NextFunction } from "express";
import { me } from "../module/auth/auth.controller";

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(403).json({
      error: 'É necessário enviar um token válido'
    })
  }

  const result = await me(req.headers.authorization.split('bearer ')[1])
  if (result && !result.error && result._id) {
    return next();
  }

  if (result && result.error) {
    return res.status(403).json({
      error: result.error
    })
  }

  return res.status(403).json({
    error: 'Usuário não permitido para criar outro usuário'
  })
}