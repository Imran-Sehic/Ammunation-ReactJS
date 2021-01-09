import { takeLatest } from 'redux-saga/effects'
import { GET_PROFILE } from '../ducks/user';
import { handleGetProfile } from "./handlers/user";

export function* watcherSaga() {
    yield takeLatest(GET_PROFILE, handleGetProfile)
};