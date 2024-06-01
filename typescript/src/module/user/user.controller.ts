// importação do modelo de usuário
import { userModel } from './user.model'

// a linha abaixo traz apenas Types de mongoose para este arquivo pois precisamos
// apenas do Types.ObjectId
import { Types } from 'mongoose'

interface UserGetOneByIdParams {
    _id: string
}

interface UserGetOneParams {
    email: string
}

interface UserStoreParams {
    name: string
    email: string
    password: string
}

interface UserRemoveParams {
    _id: string
}

interface UserUpdateParams {
    _id: string
    name: string
    email: string
    password: string
}

// método para trazer todos os usuários
export const getAll = async () => {
    return await userModel.find().exec()
}

export const getOne = async ({ email }: UserGetOneParams) => {
    return await userModel.findOne({ email }).exec()
}

export const getOneById = async ({ _id }: UserGetOneByIdParams) => {
    return await userModel.findOne({ _id }).exec()
}

export const store = async ({
    name,
    email,
    password
}: UserStoreParams) => {
    return await userModel.create({
        _id: new Types.ObjectId,
        name,
        email,
        password
    })
}

export const remove = async ({ _id }: UserRemoveParams) => {
    return await userModel.deleteOne({ _id })
}

export const update = async ({
    _id,
    name,
    email,
    password
}: UserUpdateParams) => {
    return await userModel.updateOne({
        _id
    }, {
        name,
        email,
        password
    })
}

export default {
    getAll,
    store,
    remove,
    update,
    getOneById,
    getOne,
}