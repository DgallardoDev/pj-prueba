import { put, call, takeLatest } from "redux-saga/effects";
import { setCatalog } from "../actions/catalog";
import { apiCall } from "../../utils/api";
import { types } from "../types";
import { randomPrice } from "../../utils/randomPrice";

function* getCatalog() {
  try {
    const respuesta = yield call(apiCall);
    //al obtener los productos asignamos el precio aleatorio a cada producto ademas se genera el id para cada uno de ellos 
    const catalog = respuesta.data.amiibo.map(producto=>({...producto,price:randomPrice(),id:`${producto.head}${producto.tail}`}))
    //se despachan los productos al estado
    yield put(setCatalog(catalog));
  } catch (error) {
    alert(error.message);
  }
}
// watcher estan esperando que se ejecute el dispatch de alguna action
export function* catalog() {
  yield takeLatest(types.getCatalog, getCatalog);
}