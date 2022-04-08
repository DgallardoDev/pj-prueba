import { all } from 'redux-saga/effects';
import {catalog} from './catalog';

export default function* rootSaga() {
  yield all([catalog()]);
}
