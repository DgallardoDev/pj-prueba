import {types} from '../types'
// action para recibir la llamada y obtener productos
export const getCatalog = () =>({
    type:types.getCatalog,
})
// action para setear los productos obtenidos
export const setCatalog = (payload) =>({
    type:types.setCatalog,
    payload
})