import lottery from './lottery';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    lottery()
  ])
};