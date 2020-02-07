import { all } from 'redux-saga/effects';

import dev from './dev/sagas';

export default function* rootSaga() {
  return yield all([dev]);
}
