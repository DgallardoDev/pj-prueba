import {types} from '../types'
// action para recibir la llamada y obtener productos
export const getCatalog = () =>({
    type:types.getCatalog,
})
// action para recibir el dispatch de getAllAmiibos
export const setCatalog = (payload) =>({
    type:types.setCatalog,
    payload
})