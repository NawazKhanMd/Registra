import { call, put, select, takeEvery } from 'redux-saga/effects';

import { actions } from '../constants';
import { saveUserData } from './api';

export function* saveUserDataSideEffect(action) {
    const storeData = yield select();
    try {
        const data = yield call(saveUserData(storeData.UserData));
        yield put({ type: actions.save_user_data_success, payload: data });
    } catch (e) {
        yield put({ type: actions.save_user_data_failure, payload: e.message });
    }
}

export function* rootSaga() {
    yield takeEvery([actions.save_user_data,actions.save_office_data,actions.user_sign,actions.profile_picture], saveUserDataSideEffect);
}