import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { addDevSuccess, listDevSuccess, addDevFailure } from './actions';

function* addDev({ payload }) {
  try {
    const { data } = yield call(api.post, '/devs', payload.data);
    toast.success('Dev inserido  com sucesso');
    yield put(addDevSuccess(data));
  } catch (err) {
    toast.error('Falha ao adicionar um Dev');
    yield put(addDevFailure());
  }
}

function* listDev() {
  try {
    const { data } = yield call(api.get, '/devs');
    yield put(listDevSuccess(data));
  } catch (err) {
    toast.error('Falha ao adicionar um Dev');
    yield put(addDevFailure());
  } finally {
    history.push('/');
  }
}

export default all([
  takeLatest('@dev/DEV_REQUEST', addDev),
  takeLatest('@dev/LIST_REQUEST', listDev),
]);
